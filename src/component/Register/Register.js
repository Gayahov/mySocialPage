import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
  // Handling the name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  // Handling the LastName change
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };
  // Handling nickName chenge
  const handleNickName = (e) => {
    setNickName(e.target.value);
    setSubmitted(false);
  };
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
  // Handling the password change
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      nickName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else {
      const response = await fetch("api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          nick_name: nickName,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await response.json();
      console.log(data);
      setSubmitted(true);
      if (data.error) {
        setError(data.error);
      } else {
        setError(false);
      }
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {firstName} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div>
      {/* <Link to="/home">Home</Link> */}
      <div className="form">
        <div>
          <h1>Sign Up</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form className="reg-log-form">
          {/* Labels and inputs for form data */}
          <label className="label">Name</label>
          <input
            onChange={handleFirstName}
            className="input"
            value={firstName}
            type="text"
          />

          <label className="label">LastName</label>
          <input
            onChange={handleLastName}
            className="input"
            value={lastName}
            type="text"
          />

          <label className="label">Nick Name</label>
          <input
            onChange={handleNickName}
            className="input"
            value={nickName}
            type="text"
          />

          <label className="label">Email</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />

          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />
          <label className="label">Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            className="input"
            value={confirmPassword}
            type="password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          {" "}
          Already registered? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
