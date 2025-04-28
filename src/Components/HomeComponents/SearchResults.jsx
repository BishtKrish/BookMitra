import React from "react";
import AnimatedCard from "./AnimatedCard"; // Reusing existing card component

const SearchResults = ({ searchedBooks }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      {searchedBooks.length > 0 && (
        <>
          <h2 className="text-4xl font-bold text-center my-6">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchedBooks.map((book) => (
              <AnimatedCard key={book._id} item={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
