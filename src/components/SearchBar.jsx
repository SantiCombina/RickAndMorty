import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative">
      <input
        className="px-4 py-2 w-64 rounded-full text-gray-800 focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button
        className={`absolute top-0 right-0 px-4 py-2 ${
          isFocused ? "bg-blue-500 text-white" : "text-gray-800"
        }`}
      >
        <FaSearch />
      </button>
    </div>
  );
};
