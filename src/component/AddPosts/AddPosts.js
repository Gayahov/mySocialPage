import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPosts.css";

export default function AddPosts(onAddPost) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const handleOnSubmit = async (e) => {
    // e.preventDefault();

    let formData = new FormData();
    if (image) {
      formData.append("avatar", image);
    }
    formData.append("title", title); // title
    formData.append("subtitle", subtitle); // subtitle
    formData.append("description", description); // description

    let response = await fetch("/api/v1/post", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        subtitle: subtitle,
        description: description,
      }),
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
      body: formData,
    });
    let data = await response.json();
    console.log(data);
    setTitle("");
    setSubTitle("");
    setDescription("");
    window.location.href = "/home";
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    // setSubmitted(false);
  };
  const handleSubTitle = (e) => {
    setSubTitle(e.target.value);
    // setSubmitted(false);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    // setSubmitted(false);
  };

  return (
    <div className="adding" >
      <p>Share your impressions with us!</p>
    <div >
      
      <div className="add-posts">
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input
        onChange={handleTitle}
        placeholder="Title"
        value={title}
        type="text"
      />
      <input
        onChange={handleSubTitle}
        placeholder="Subtitle"
        value={subtitle}
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
      <div className="add-post-btn">
      <button onClick={(e) => {handleOnSubmit(e);}}>Add Post </button>
      </div>
      </div>
    </div>
    </div>
  );
}
