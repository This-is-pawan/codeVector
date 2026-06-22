import React, { useEffect, useState } from "react";
import axios from "axios";
import { categories } from "./data";
import {Link} from 'react-router-dom'
const ProductList = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [option, setOption] = useState(categories);
    const [category, setCategory] = useState("Allcategory");
    const [addCard, setAddCard] = useState("+ Show");
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
 const handle_option = (e) => {
setCategory(e.target.value);
setPage(1);
};
  const getProducts = async () => {
  
    const limit = 25;
   
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${API_URL}/codevector/products?page=${page}&limit=${limit}&category=${category}`,
        { headers: { Accept: "application/json" } },
      );
      if (data) {
        setData(data?.products);
          setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category,page]);

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <select onChange={handle_option}>
        {option.map((item, index) => (
          <option key={index} value={item} >
            {item}
          </option>
        ))}
      </select>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Fashion <span className="text-yellow-600">Collection</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {data.length} products found
        </p>
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="w-12 h-12 border-4 border-pink-200 border-t-yellow-500 rounded-full animate-spin" />
          <p className="text-sm text-gray-400">Loading products...</p>
        </div>
      )}

      {/* Product Grid */}
      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.map(({ _id, name, category, price, image, createdAt }) => (
            <article
              key={_id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-yellow-400 hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              {/* Image */}
              <div className="bg-pink-100 h-44 flex items-center justify-center overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-4xl">👗</span>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <span className="text-[10px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full capitalize">
                  {name}
                </span>
                <h2 className="text-sm font-medium text-gray-800 mt-2 line-clamp-2 leading-snug">
                  {category}
                </h2>
                <p className="text-yellow-600 font-semibold text-sm mt-2">
                  ₹{price}
                </p>
                <Link  to={`/product-card/${_id}`}>
                <p className="text-yellow-600 font-semibold text-sm mt-8 border text-center rounded-lg bg-black p-4 m">
               {addCard}
                </p>
                </Link>
              </div>
            </article>
          ))}



        </div>
      )}
{/* pagination */}

<div className="flex justify-center items-center gap-4 mt-8">
  <button
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
    className="px-4 py-2 bg-black text-white rounded disabled:bg-gray-400"
  >
    Previous
  </button>

  <span className="font-semibold">
    Page {page} of {totalPages}
  </span>

  <button
    disabled={page === totalPages}
    onClick={() => setPage(page + 1)}
    className="px-4 py-2 bg-black text-white rounded disabled:bg-gray-400"
  >
    Next
  </button>
</div>


      {/* Empty State */}
      {!loading && data.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 gap-3">
          <span className="text-5xl">🛍️</span>
          <p className="text-gray-500 text-sm">No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
