import React from "react";
import { useState, useHistory, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let fetchData = async () => {
      if (localStorage.getItem("token")) {
        navigate("/profile");
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
        navigate("/profile");
      }
    };
    fetchData();
  }, []);
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      const response = await fetch("api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      console.log(data);
      //setSubmitted(true);
      if (data.error) {
        if (Array.isArray(data.error)) {
          console.log(1111);
          data.error.forEach((item) => {
            console.log(item.param, item.msg);
            document.getElementById(item.param).style.display = "flex";
            document.getElementById(item.param).innerHTML = item.msg + " type";
          });
        } else {
          setError(data.error);
        }
      } else {
        localStorage.setItem("token", data.access_token);
        setError(false);
        document.getElementById("loginId").style.display = "none"
        navigate("/profile");
      }
    }
  };

  // Showing success message
  // const successMessage = () => {
  //   return (
  //     <div
  //       className="success"
  //       style={{
  //         display: error ? "" : "none",
  //       }}
  //     >
  //       <h1>{error}</h1>
  //     </div>
  //   );
  // };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "flex" : "none",
        }}
      >
        <h1>{error}</h1>
      </div>
    );
  };

  return (
    <div>
      {/* <Link to="/home">Home</Link> */}
      <div className="form">
        <div>
          <h1>Sign In</h1>
        </div>
        {/* Calling to the methods */}
        <div className="messages">{errorMessage()}</div>

        <div className="reg-log-form">
          <label className="label">Email</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />
          <p
            id="email"
            style={{
              display:
                email.length &&
                (email.indexOf("@") === -1 || email.indexOf(".") === -1)
                  ? "flex"
                  : "none",
            }}
          >
            Email required
          </p>

          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
          <p
            id="password"
            style={{
              display: password.length && password.length < 8 ? "flex" : "none",
            }}
          >
            Password must be 8 character length
          </p>

          <button onClick={handleSubmit} className="btn">
            Sign In
          </button>
        </div>
        <p>
          New to this site? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
