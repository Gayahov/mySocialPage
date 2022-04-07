import Post from "../Post/Post";
import React, { useEffect, useState } from "react";
import useFetch from "../Hook/useFetch";
import { POSTS_URL } from "../../constants/Urls";
import AddPosts from "../AddPosts/AddPosts";
import "./Posts.css";
import SearchPosts from "../SearchPosts/SearchPosts";

export default function Posts() {
  const [data] = useFetch(POSTS_URL);

  return (
    <div className="main-posts">
      <div className="all-posts">
        <h1>All Posts</h1>
        <SearchPosts></SearchPosts>
      </div>

      <div className="posts">
        <div className="inputs">
          <AddPosts></AddPosts>
        </div>

        {data ? (
          <div className="post-section">
            {data.slice(0, 10).map((item) => {
              return <Post title={item.title} body={item.body} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
