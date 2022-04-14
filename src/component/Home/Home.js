import Posts from "../Posts/Posts";
import MainCarousel from "../MainCarousel/MainCarousel";
import AddPosts from "../AddPosts/AddPosts";
import SearchPosts from "../SearchPosts/SearchPosts";
import "./Home.css";
import { useState } from "react";
import { shadows } from "@mui/system";
import fetchDatas from "../../constants/fetchDatas";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [showAdd, setShowAdd] = useState(false);

  const ShowAdd = async (evt) => {
    let user = await fetchDatas(`/api/v1/profile`);
    if (user.error) {
      navigate("/login");
    }else {
    evt.preventDefault();
    setShowAdd(!showAdd);
    }
  };

  return (
    <div className="main">
      <MainCarousel />
      <div>
        <div className="add-post">
          <p>
            Share your impressions with us!
            <button className="show-add-btn" onClick={ShowAdd}>
              Add Posts
            </button>
          </p>

          <SearchPosts />
        </div>

        {showAdd ? <AddPosts /> : setShowAdd}
      </div>

      <div style={{ display: "flex" }}>
        <Posts
          favorite={"all  posts"}
          endpoint={"api/v1/post/?limit=12&offset=0"}
        />
      </div>
    </div>
  );
}
