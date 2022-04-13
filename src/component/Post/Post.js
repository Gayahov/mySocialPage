import AddToFav from "../AddToFav/AddToFav";
import ClearIcon from "@mui/icons-material/Clear";
import AddComment from "../AddComment/AddComment";
import "./Post.css";
import { useState ,useEffect, useRef } from "react";

function Post({img,firstName,createdAt,title,subtitle,description,user_id,favorite,postId,comments}) {
  const dropdownCom = useRef(null);
  const [allComments, setAllcomments]= useState(dropdownCom, false);
  



  const deletePost = async (e) => {
    console.log(postId);
    let deletePost = await fetch(`/api/v1/post?post_id=${postId}`, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    let data = await deletePost.json();
    console.log(data);
    if (data.msg) {
      window.location = "/home";
    } else {
      alert(data.error);
    }
  };
  const addFavorite = async () => {
    let addFavoritePost = await fetch(`/api/v1/favpost?post_id=${postId}`, {
      method: "POST",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    let data = await addFavoritePost.json();
    console.log(data);
  };

  const openAllCom = () => setAllcomments(!allComments);
  return (
    <div>
      <div className="posts-div ">
        <div className="delete-div">
          <button onClick={deletePost}>
            <ClearIcon />
          </button>
        </div>
        <h2>{title}</h2>
        <p>{createdAt.split("T")[0]}</p>
        <div className="test">
          <div className="post-img">
            <img src={img} alt={title} />
          </div>
          <div className="post-body">
            <h3>{subtitle}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <a href={`/author/${user_id}`} style={{ display: favorite === "author" ? "none" : "flex" }}>
            see all posts from <spam style={{ marginLeft: "5px" }}>{firstName}</spam></a>
        </div>
        <div onClick={addFavorite} >
            <AddToFav  /> 
          </div>
        <div className="com-fav">
          <AddComment postId={postId} />
          <div >
          <p onClick={openAllCom}  className="comments">  View All Cooments </p>
           
           <div ref={dropdownCom}
        className={`all-comment ${allComments? "all-comment" : "active"}`}>

            {comments &&
              comments.map((item, index) => {
                if (index < 5) {
                  return (
                    <div className="user-com">
                      
                      <h4>{item.userName}</h4>
                      <p> {item.text}</p>
                    
                    </div>
                  );
                }
              })}
          </div>
        </div>     
        </div>
      </div>
    </div>
  );
}
export default Post;
