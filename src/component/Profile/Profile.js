import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Profile.css";
import AddPhoto from "../AddPhoto/AddPhoto";

export default function Profile() {
  let navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nick_name, setNickName] = useState("");
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEditSubmit = async (evt) => {
    evt.preventDefault();
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
        document.getElementById("test").style.display = "none";
      } else {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    document.getElementById("test").style.display = "block";
    navigate("/login");
  };

  return (
    <div className="profile-div">
      {/* <span>
         <Link to="/home"><HomeIcon/></Link>{" "}
      </span> */}
      <div className="profile">
        <div className="edit-profile">
          <div className="edit-icon">
            <EditIcon onClick={handleEdit} />
          </div>
          <img
            src={user?.url}
            className="img-div"
            alt="asfasd"
            style={{ width: "100px" }}
          />
        </div>
        {isEdit ? (
          <>
            <form onSubmit={handleOnEditSubmit} className="edit-form">
              <AddPhoto />
              <label>firstName :</label>
              <input
                placeholder="firstName"
                name="firstName"
                //   id="firstName"
                defaultValue={user.firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label>LastName :</label>
              <input
                placeholder="lastName"
                name="lastName"
                defaultValue={user.lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label>NickName :</label>
              <input
                placeholder="nickname"
                name="nickName"
                defaultValue={user.nick_name}
                onChange={(e) => setNickName(e.target.value)}
              />
              <button onSubmit={handleOnEditSubmit}>Save</button>
            </form>
          </>
        ) : (
          <div className="profile-info">
            <p>
              {" "}
              <PersonIcon /> : {firstName}
            </p>

            {/* <p>
              Last Name: <spam>{lastName}</spam>{" "}
            </p>
            <p>
              nickName: <spam>{nick_name}</spam>{" "}
            </p> */}
          </div>
        )}
        <p>
          <MailIcon style={{ marginTop: "5px", padding: "5px" }} />:{" "}
          {user.email}{" "}
        </p>
        <p></p>
        <div>
          <button className="log-out" onClick={Logout}>
            Log Out
          </button>
        </div>
      </div>
      <button className="log-out" onClick={Logout}>
        Log Out
      </button>
    </div>
  );
}
