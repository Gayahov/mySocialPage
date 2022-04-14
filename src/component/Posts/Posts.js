import Post from "../Post/Post";
import React, { useEffect, useState } from "react";
import useFetch from "../Hook/useFetch";
import { POSTS_URL } from "../../constants/Urls";
import AddPosts from "../AddPosts/AddPosts";
import "./Posts.css";
import fetchDatas from "../../constants/fetchDatas";
import SearchPosts from "../SearchPosts/SearchPosts";

export default function Posts({ favorite, endpoint, first, ...props }) {
  const [postArray, setPostArray] = useState("");
  const [user, setUser] = useState("")
  const [favPost, setFavPost] = useState("")
 const [state, setState] = useState("")
 useEffect(() => {
  (async () => {
    console.log("from state",props);
    if(first) {
      setPostArray(first)
    } else {
      if(localStorage.getItem("token")){
      let favData = await fetchDatas(`/api/v1/favpost?limit=10&offset=0`)
      
      console.log("favdata",favData)
      if(!favData?.error) {
       setFavPost(favData)
      }
      }
    let data = await fetchDatas(endpoint);
    if(!data.error){
    setPostArray(data);
    }
    if(data.error) {
      localStorage.removeItem("token")
    }
    }
  })()
}, [state]);
  useEffect(() => {
    (async () => {
      console.log(props);
      if(first) {
        setPostArray(first)
      } else {
        if(localStorage.getItem("token")){
          console.log(11111)
          let newUser = await fetchDatas(`/api/v1/profile`) 
          if(!newUser.error) {
            setUser(newUser)
          }
          let favData = await fetchDatas(`/api/v1/favpost?limit=10&offset=0`)
          console.log("favdata",favData)
          if(!favData.error) {
           setFavPost(favData)
          }
          }
      let data = await fetchDatas(endpoint);
      if(!data.error){
      setPostArray(data);
      }
      if(data.error) {
        localStorage.removeItem("token")
      }
      }
    })()
  }, []);
  return (
    <>
    <div className="main-posts">
      
        
        {console.log(postArray)}
        {postArray ? (
          <div className="post-section">
            {postArray.map((item) => {
              let x = false;
              let showVedro = true;
              if(item.user_id !== user.id) {
                showVedro = false;
              }
              if(favPost && favPost.length)
              {
            favPost.forEach(item2 => {
              if(item2.postId === item.postId) {
                x = true;
              }
            });
          }
              return (
                <Post
                  subtitle={item.subtitle}
                  img={item.image_url}
                  firstName={item.firstName}
                  createdAt={item.createdAt}
                  title={item.title}
                  description={item.description}
                  user_id={item.user_id}
                  favorite={favorite}
                  postId={item.postId}
                  comments={item.json_agg}
                  stateChanger={setState}
                  state={state}
                  favPost={favPost}
                  liked={x}
                  showVedro={showVedro}
                />
              );
            })}
          </div>
        ) : null}
     
    </div>
    </>
  );
}
