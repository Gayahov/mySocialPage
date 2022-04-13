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

  useEffect(() => {
    (async () => {

      console.log(props);
      if(first) {
        setPostArray(first)
      } else {
      let data = await fetchDatas(endpoint);
      setPostArray(data);
      }
    })();
  }, []);
  return (
    <>
    <div className="main-posts">
      <div className="posts">
        <div className="inputs">
          {/* <AddPosts onAddPost={onAddPost}></AddPosts> */}
        </div>
        {console.log(postArray)}
        {postArray ? (
          <div className="post-section">
            {postArray.map((item) => {
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
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
    </>
  );
}
// import Post from "../Post/Post";
// import React, { useEffect, useState } from "react";
// import useFetch from "../Hook/useFetch";
// import { POSTS_URL } from "../../constants/Urls";
// import AddPosts from "../AddPosts/AddPosts";
// import "./Posts.css";
// import fetchDatas from "../../constants/fetchDatas"
// import SearchPosts from "../SearchPosts/SearchPosts";

// export default function Posts({favorite,endpoint, first,...props}) {
//   const [postArray, setPostArray] = useState("");

// useEffect(() => {
//   (async() =>{
//     console.log(props)
//     if(first) {
//       setPostArray(first);
//     } else {
//    let data = await fetchDatas(endpoint);
//     setPostArray(data);
//     }
//   })()
// },[])
// return (
//         <div>
//           <div className="all-posts">
//           <h1>{favorite}</h1>
//           <SearchPosts></SearchPosts>
//         </div>

//       <div className="main-posts">

//         <div className="posts">
//           <div className="inputs">

//           </div>

//           {postArray ? (
//             <div className="post-section">
//               {postArray.map((item) => {
//                 return (
//                   <Post
//                     subtitle={item.subtitle}
//                     img={item.image_url}
//                     firstName={item.firstName}
//                     createdAt={item.createdAt}
//                     title={item.title}
//                     description={item.description}
//                     user_id={item.user_id}
//                     favorite={favorite}
//                   />
//                 );
//               })}
//             </div>
//           ) : null}
//         </div>
//       </div>
//       </div>
//     );

// }
