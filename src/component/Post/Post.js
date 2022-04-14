import AddToFav from "../AddToFav/AddToFav";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import AddComment from "../AddComment/AddComment";
import "./Post.css";
import { useState, useEffect, useRef } from "react";

function Post({
  img,
  firstName,
  createdAt,
  title,
  subtitle,
  description,
  user_id,
  favorite,
  postId,
  comments,
  stateChanger,
  state,
  liked,
  showVedro,
}) {
  const dropdownCom = useRef(null);
  const [allComments, setAllcomments] = useState(dropdownCom, false);
  const [showLess, setShowLess] = useState(true);
  const max = 50;
  const text = description;
  if (text.length <= max) {
    return <p>{text}</p>;
  }

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
    if (!data.error) {
      stateChanger(!state);
    }
  };
  const deleteComment = async (e) => {
    let response = await fetch(`/api/v1/comment?id=${e.currentTarget.id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    let deletedComment = await response.json();
    console.log(deletedComment);
    if (!deleteComment.error) {
      stateChanger(!state);
    }
  };

  const openAllCom = () => setAllcomments(!allComments);
  return (
    <div className="posts">
      <div className="posts-div ">
        <div className="delete-div">
          <div
            style={{ display: showVedro ? "flex" : "none" }}
            onClick={deletePost}
          >
            <DeleteIcon />
          </div>
        </div>
        <div>
        <h2>{title}</h2>
        <div>
          <a
            href={`/author/${user_id}`}
            style={{ display: favorite === "author" ? "none" : "flex" }}
          >
            see all posts from{" "}
            <spam style={{ marginLeft: "5px" }}>{firstName}</spam>
          </a>
        </div>

        <div>
          <div className="post-img">
            <img src={img} alt={title} />
          </div>
          </div>
          <div>
          <div className="post-body">
            <h3>{subtitle}</h3>
            <p>
              {showLess ? `${text.substring(0, max)}...` : text}
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  setShowLess(!showLess);
                }}
              >
                {showLess ? "Show more" : "... Show Less"}
              </a>
            </p>
          </div>
          d</div>
        </div>

        <div onClick={addFavorite} className="date">
          <AddToFav liked={liked} />
          <p>{createdAt.split("T")[0]}</p>
        </div>

        <p onClick={openAllCom} className="comments">
          {" "}
          View All Cooments ({comments?.length})
        </p>

        <div
          ref={dropdownCom}
          className={`all-comment ${allComments ? "all-comment" : "active"}`}
        >
          {comments &&
            comments.map((item, index) => {
              if (index < 5) {
                return (
                  <div className="user-com">
                    <h4>{item.userName}</h4>
                    <p> {item.text}</p>
                    <div  id={item.commentsId} onClick={deleteComment}>
                      <DeleteIcon />
                    </div>
                  </div>
                );
              }
            })}

          <AddComment
            postId={postId}
            stateChanger={stateChanger}
            state={state}
          />
        </div>
      </div>
    </div>
  );
}
export default Post;
