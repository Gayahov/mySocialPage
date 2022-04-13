import React from "react";
import { useState, useRef } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./AddComment.css";

export default function AddComment({ postId, comments }) {
  const dropdownRef = useRef(null);
  const [openComment, setOpenComment] = useState(dropdownRef, false);
  const [text, setText] = useState("");
  const onClick = () => setOpenComment(!openComment);

  const addComment = async () => {
    console.log("text", text);
    console.log(postId);
    let response = await fetch(
      `/api/v1/comment?post_id=${postId}&parent_id=0`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ text: text }),
      }
    );
    let data = await response.json();
    console.log(data);
    if (!data.error) {
      let url = window.location.pathname;
      window.location.href = url;
    } else {
      alert(data.error);
    }
  };
  return (
    <div className="comment">
      <p> Join us for the Discussion!</p>
      <p onClick={onClick}>
        Add Comment
      </p>
      <div
        ref={dropdownRef}
        className={`add-comment ${openComment ? "add-comment" : "active"}`}
      >
        <input
          placeholder="Comment"
          name="name"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addComment}>Add Comment</button>
      </div>
      
    </div>
  );
}
