import React, { useEffect, useState, useContext } from "react";
import Cards from "../HomeComponents/Cards.jsx";
import axios from "axios";
import { CartContext } from "../../ContextApi/CartContext.jsx";

const Collections = () => {
  const { addToCart } = useContext(CartContext);
  const [books, setBooks] = useState([]);

  // Fetch books from backend
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("https://bookmitra-backend.onrender.com/Book_Store");
        setBooks(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto p-4 md:p-20">
      <h1 className="text-3xl md:text-4xl font-bold pl-5 text-start pt-5 border-b-2 pb-3">
        Our Collections
      </h1>

      {books.length === 0 ? (
        <p className="text-center mt-10 text-lg">No books available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {books.map((item) => (
            <Cards item={item} key={item._id} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
