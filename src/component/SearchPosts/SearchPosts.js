import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./SearchPosts.css";

import Posts from "../Posts/Posts";
import fetchDatas from "../../constants/fetchDatas";
import { Favorite } from "@mui/icons-material";



export default function SearchPosts() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("Posts");
  const [postArray, setPostArray] = useState("");
  const [truefalse, setTrueFalse] = useState(false);
  const SearchText = async () => {
    let data = await fetchDatas(
      `/api/v1/search?text=${search}&tableName=${type}`
    );
    let [first, second] = data;
    setPostArray(first);
    document.getElementsByClassName("posts")[0].style.display = "none";
    setTrueFalse(true);
    // return <Post favorite={"searched"} endpoint={""} first={first} />;
  };
  return (
    <div className="search">
     
      <input
        placeholder="Search"
        name="name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={SearchText}>Search</button>
      {truefalse && (
        <Posts favorite={"searched"} endpoint={""} first={postArray} />
      )}
    </div>
  );
}
