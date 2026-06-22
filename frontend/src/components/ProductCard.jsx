import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductCard = () => {
  const { id } = useParams();

  
  const API_URL = import.meta.env.VITE_API_URL;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/codevector/products/${id}`
        );

        setProduct(data.product);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProduct();
  }, [id]);



  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold">{product?.name}</h2>

        <p className="text-gray-500 mt-2">
          Category: {product?.category}
        </p>

        <p className="text-yellow-600 text-xl font-bold mt-3">
          ₹{product?.price}
        </p>

        <button className="w-full mt-5 bg-black text-white py-3 rounded-lg">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;