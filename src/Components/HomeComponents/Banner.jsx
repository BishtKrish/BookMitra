import React, { useState, useEffect } from "react";
import SwiperCard from "./SwiperCard";
import axios from "axios";
import SearchResults from "./SearchResults"; 

const Banner = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("https://bookmitra-backend.onrender.com/Book_Store");
        setBooks(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchedBooks([]); 
      return;
    }

    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedBooks(results);
  };

  return (
    <>
      {/* Banner Section */}
      <div className="max-w-screen-2xl container mx-auto p-4 md:p-20 flex flex-col md:flex-row mt-16">
        <div className="w-full order-2 mt-3 sm:mt-5 px-5 md:pl-8 md:order-1 md:w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
            Buy and sell your book
          </h1>
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-600 pb-2">
            for the best price
          </h1>
          <p className="pt-3 text-[12px] md:text-[13px] pr-2 text-justify dark:text-slate-300">
            Find and read more books you will love and keep track of the books
            you want to read. Be part of the world's largest community of book
            lovers.
          </p>

          {/* Search Bar */}
          <div className="join pt-4 pb-6 border-none outline-none">
            <div>
              <input
                className="input text-sm border-none outline-none input-bordered join-item dark:bg-slate-700 dark:text-white"
                placeholder="Search a book here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />  
            </div>
            <div className="indicator border-none">
              <button
                className="btn bg-blue-600 text-white join-item hover:bg-blue-800 dark:bg-blue-800 dark:text-white dark:border-none dark:hover:bg-blue-900"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center order-1 md:order-2 md:w-1/2">
          <SwiperCard />
        </div>
      </div>

      {/* New Section: Display Searched Books */}
      <SearchResults searchedBooks={searchedBooks} />

    </>
  );
};

export default Banner;
