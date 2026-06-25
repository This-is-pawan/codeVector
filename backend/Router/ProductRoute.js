import express from "express";

import Products from "../models/ProductSchema.js";
import { categories,categoryImages } from "../data/data.js";
import { faker } from "@faker-js/faker";

const Routes = express.Router();

// CREATE PRODUCTS  copy from amazon website
Routes.post("/products", async (req, res) => {
  try {
   
// create 50000 product in one time
    const products = Array.from({ length: 50000 }, (_,i) => {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)]; // get random category

      return {
        name: `Product-${i}`,
        category: randomCategory,
        price: Math.floor(Math.random() * 50000),
      image:
      categoryImages[randomCategory] ||
      faker.image.url(), 
      };
    });

    const result = await Products.insertMany(products);

    return res.json({
      success: true,
      message: `${result.length} products created`,
      count: result.length,
    });
  } catch (error) {
    return res.json({
      message: error.message,
      success: false,
    });
  }
});



// GET all products
Routes.get("/products", async (req, res) => {
  try {
    let { category, limit = 50 ,page=1} = req.query;

    let query = {};
    if (category && category !=='All' && category !== "Allcategory" ) {
      query.category = new RegExp(`^${category}$`, "i"); 
      
    }
    const skip=(Number(page)-1)*Number(limit);
    const total_products_db=await Products.countDocuments(query)


    const products = await Products.find(query)
      .sort({ _id: 1 })
      .limit(Number(limit))
      .skip(skip)

    res.json({
      success: true,
      count: products.length,
      total_products_db,                                    
      totalPages: Math.ceil(total_products_db / Number(limit)),  
      currentPage: Number(page),                        
      products,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});
Routes.get("/products/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



export default Routes;
