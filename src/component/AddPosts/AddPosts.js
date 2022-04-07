import React from "react";
import './AddPosts.css'

export default function AddPosts({onAdd }) {
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     onAdd(e.target.name.value,e.target.username.value, e.target.email.value);
//     e.target.name.value = "";
//     e.target.username.value = "";
//     e.target.email.value = "";
//   };

  return (
    <form className="add-posts"  >
      <input placeholder="Tittle" name="name" />
      <input placeholder="Subtittle" name="name" />
      <textarea name="your minds" rows="5" cols="50" placeholder="what's new?"></textarea>
      <button>Add Post</button>
    </form>
  );
};
