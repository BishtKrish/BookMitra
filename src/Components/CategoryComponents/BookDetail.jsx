import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../HomeComponents/Navbar.jsx';
import Footer from '../HomeComponents/Footer.jsx';
import { CartContext } from '../../ContextApi/CartContext'; 
import { TiStarFullOutline } from "react-icons/ti";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const BookDetail = () => {
  const { id } = useParams();
  const book = useLoaderData(); // Fetch the book data from loader
  console.log("Book data:", book);
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  if (!book) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const { title, category, price, disc, img } = book;

  return (
    <>
      <Navbar />
      <div className="w-full py-8 px-4 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {/* Product Image */}
                <div className="overflow-hidden rounded-xl ">
                  <img
                    src={img}
                    alt="Product-Image"
                    className="w-full h-auto object-cover max-h-[370px]"
                  />
                  <p className="mt-3 px-2 py-2 bg-red-200 rounded-lg inline-block text-gray-800 text-sm md:text-base">
                    Availability: <span className="pl-1 font-medium text-red-700">In Stock.</span>
                  </p>
                </div>
                
                {/* Product Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Product Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                      {title}
                    </h1>
                    <p className="mt-1 text-gray-800 dark:text-gray-400 text-base md:text-lg">
                      By: <span className="font-semibold text-red-600 dark:text-red-700 underline underline-offset-1">Stan Lee</span>
                    </p>
                    {/* Product Description */}
                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-6 text-justify sm:text-left">
                      {disc}
                    </p>
                    {/* Product Category */}
                    <p className="mt-2 text-gray-700 dark:text-gray-300 font-semibold text-sm leading-6">
                      Category: {category}
                    </p>
                    {/* Star Ratings */}
                    <span className="my-2 text-lg md:text-xl text-yellow-300 dark:text-yellow-400 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <TiStarFullOutline key={index} />
                      ))}
                    </span>
                    {/* Product Price */}
                    <span className="text-xl font-semibold md:text-2xl block mt-2">
                      Price: {price}$
                    </span>
                  </div>
                  
                  {/* Order Button */}
                  <div className="w-full mt-4 md:mt-6">
                    <button
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-500 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500"
                      title="Add to cart"
                      onClick={() => {
                        addToCart(book);
                      }}
                    >
                      <span>Add to cart</span>
                      <HiOutlineArrowCircleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDetail;