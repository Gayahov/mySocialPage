import React from "react";
import './SearchPosts.css'

export default function SearchPosts() {
  

  return (
    <form className="search" >
      <input placeholder="Search" name="name" />
      <button>Search</button>
    </form>
  );
};
