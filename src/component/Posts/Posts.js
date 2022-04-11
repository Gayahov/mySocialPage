import Post from "../Post/Post";
import React, { useEffect, useState } from "react";
import useFetch from "../Hook/useFetch";
import { POSTS_URL } from "../../constants/Urls";
import AddPosts from "../AddPosts/AddPosts";
import "./Posts.css";
import SearchPosts from "../SearchPosts/SearchPosts";

export default function Posts() {
  const [postArray, setPostArray] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("/api/v1/post/mypost?limit=10&offset=0", {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      let data = await response.json();
      console.log(data);
      setPostArray(data);
    };
    fetchData();
  }, []);
  let formData = new FormData();
  // formData.append("title","blog8"); // title
  // formData.append("subtitle","blog8sub"); // subtitle
  // formData.append("description","blog8desc") // description
  // console.log(formData)

  const onAddPost = async (e) => {
    e.preventDefault();
    // let response = await fetch("/api/v1/post", {
    //   method: "POST",
    //   // body: JSON.stringify({
    //   //   title: title,
    //   //   subTitle: subTitle,
    //   //   description: description,
    //   // }),
    //   headers: {
    //     "x-access-token":localStorage.getItem('token')
    //   },
    //   body:formData
    // })
    // let data = await response.json();
    // console.log(data)
    console.log(e.target.value);
  };

  return (
    <div className="main-posts">
      <div className="all-posts">
        <h1>All Posts</h1>
        <SearchPosts></SearchPosts>
      </div>

      <div className="posts">
        <div className="inputs">
          <AddPosts onAddPost={onAddPost}></AddPosts>
        </div>

        {postArray ? (
          <div className="post-section">
            {postArray.map((item) => {
              return (
                <Post
                  subTitle={item.subTitle}
                  img={item.image_url}
                  firstName={item.firstName}
                  createdAt={item.createdAt}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
