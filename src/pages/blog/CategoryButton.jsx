import React from "react";

function CategoryButton({ category }) {
  return (
    <button className="px-16 py-1 rounded-2xl border border-orange-400 border-solid max-md:px-5 hover:bg-orange-400 hover:text-white">
      {category}
    </button>
  );
}

export default CategoryButton;