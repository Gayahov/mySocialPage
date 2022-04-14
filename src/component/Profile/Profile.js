import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import SearchPosts from "../SearchPosts/SearchPosts";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Profile.css";
import AddPhoto from "../AddPhoto/AddPhoto";
import Posts from "../Posts/Posts";

export default function Profile(favorite) {
  let navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nick_name, setNickName] = useState("");
  const [image, setImage] = useState("");
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEditSubmit = async (evt) => {
    evt.preventDefault();
    if (image) {
      let formData = new FormData();
      console.log(image);
      formData.append("avatar", image);
      let response = await fetch("/api/v1/profile/picture", {
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
        body: formData,
      });
      let data = await response.json();
      console.log("image", data);
    }
    console.log(firstName, lastName, nick_name);
    let response = await fetch("/api/v1/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        nick_name: nick_name,
      }),
    });
    let data = await response.json();
    console.log(data);

    setIsEdit(!isEdit);
  };

  useEffect(() => {
    let fetchData = async () => {
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
      if (!data.error) {
        setUser(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setNickName(data.nick_name);
        //document.getElementById("test").style.display = "none";
      } else {
        document.getElementById("loginId").style.display = "flex";
        navigate("/login");
      }
    };
    fetchData();
  }, []);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      setImage(event.target.files[0]);
      reader.onload = (e) => {
        document.getElementById("prof-img").src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const Logout = () => {
    localStorage.removeItem("token");
    document.getElementById("loginId").style.display = "flex";
    navigate("/login");
  };

  return (
    <div className="profile-div">
      <div className="profile">
        <div className="edit-profile">
          <div className="edit-icon">
            <EditIcon onClick={handleEdit} />
          </div>
          <img
            id="prof-img"
            src={user?.url}
            className="img-div"
            alt="asfasd"
            style={{ width: "100px" }}
          />
        </div>
        {isEdit ? (
          <>
            <div className="edit-form">
              <div>
                <label for="fileInput">
                  <img
                    id="icon"
                    width={"100px"}
                    src="https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg"
                    alt="SOMETHING FRONG"
                  />
                </label>
                <input
                  id="fileInput"
                  onChange={(e) => onImageChange(e)}
                  type="file"
                />
              </div>

              <label>firstName:</label>
              <input
                placeholder="firstName"
                name="firstName"
                //   id="firstName"
                defaultValue={user.firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label>LastName:</label>
              <input
                placeholder="lastName"
                name="lastName"
                defaultValue={user.lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label>NickName:</label>
              <input
                placeholder="nickname"
                name="nickName"
                defaultValue={user.nick_name}
                onChange={(e) => setNickName(e.target.value)}
              />
              <button className="save-changes" onClick={handleOnEditSubmit}>
                Save
              </button>
            </div>
          </>
        ) : (
          <div className="profile-info">
            <p>
              <PersonIcon /> : {firstName}{" "}
            </p>
          </div>
        )}
        <p>
          <MailIcon style={{ marginTop: "5px", padding: "5px" }} />:{" "}
          {user.email}{" "}
        </p>
        <p></p>
        <div></div>
        <button className="log-out" onClick={Logout}>
          Log Out
        </button>
      </div>

      <div className="pofile-post">
        <SearchPosts></SearchPosts>
        <div>
          <Posts
            favorite={"all my posts"}
            endpoint={"api/v1/post/mypost?limit=10&offset=0"}
          />
        </div>
      </div>
    </div>
  );
}
