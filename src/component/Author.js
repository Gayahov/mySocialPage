import React from "react";
import { useParams } from "react-router-dom";
import Posts from "./Posts/Posts";
import SearchPosts from "./SearchPosts/SearchPosts";
function Author(props) {
  const { id } = useParams();
  console.log(id);
  return (
    <>
    
      <div>
        <Posts
          favorite={"author"}
          endpoint={`/api/v1/author?id=${id}&limit=10&offset=0`}
        />
      </div>
    </>
  );
}

export default Author;
