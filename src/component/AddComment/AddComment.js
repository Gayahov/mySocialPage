import React from "react";
import "./AddComment.css";

export default function AddComment() {
  return (
    <div className="comment">
      <p> Join us for the Discussion!</p>
      <form className="add-comment">
        <input placeholder="Name" name="name" />
        <input placeholder="Comment" name="name" />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
