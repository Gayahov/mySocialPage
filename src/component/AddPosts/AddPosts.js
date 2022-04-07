import React, { useState } from "react";
import "./AddPosts.css";

export default function AddPosts() {
  const [title, setTitle] = useState("");
  const [subTittle, setSubTittle] = useState("");
  const [description, setDescription]= useState("")

  const handleTitle = (e) => {
    setTitle(e.target.value);
    // setSubmitted(false);
  };
  const handleSubTitle = (e) => {
    setSubTittle(e.target.value);
    // setSubmitted(false);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    // setSubmitted(false);
  };

  return (
    <form className="add-posts">
      <input
        onChange={handleTitle}
        placeholder="Title"
        value={title}
        type="text"
      />
      <input
        onChange={handleSubTitle}
        placeholder="Subtitle"
        value={subTittle}
        type="text"
      />
      <textarea
        name="your minds"
        rows="5"
        cols="50"
        value={description}
        onChange={handleDescription}
        placeholder="what's new?"
      ></textarea>
      <button>Add Post</button>
    </form>
  );
}
