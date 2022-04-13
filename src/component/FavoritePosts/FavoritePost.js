import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import SearchPosts from "../SearchPosts/SearchPosts";
function Favorite2(props) {
  let navigate = useNavigate();
  console.log(props);
  const [first, setfirst] = useState(false);
  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("token")) {
        navigate("/login");
        return;
      }
      let response = await fetch("/api/v1/profile", {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      let data = await response.json();
      console.log(data);
      if (data.error) {
        navigate("/login");
      } else {
        setfirst(true);
      }
    })();
  }, []);
  return (
    <div>
      <SearchPosts/>
      {first && (
        <Posts
          favorite={"my favorite"}
          endpoint={`/api/v1/favpost?limit=10&offset=0`}
        />
      )}
    </div>
  );
}
export default Favorite2;
