import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/userContext";
import Navbar from "../Components/Navbar";

const userRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(userDataContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const responce = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (responce.status === 201) {
      const data = responce.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <>
    <Navbar/>
      <div className="mainRegister">
      
      <div className="RegisterForm">
      <center>
     <img src="./src/img/c4.png" alt="Car Logo" />
     </center>
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3>Name</h3>
            <div className="Inputs">
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm"
                type="text"
                name="firstName"
                id=""
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="LastNameInput"
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3>Email </h3>
            <input
              className="EmailInput"
              type="email"
              name="email"
              id=""
              required
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className=" mb-2 font-medium">Password</h3>
            <input
              className="EmailInput "
              type="password"
              name="password"
              id=""
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            

            <button
              type="submit"
              className="btn1"
            >
              Create Account
            </button>
            <br />
            <br />

            <Link to="/login" className="text-[#111] text-sm block mt-1">
              <p className="conditionSign">Already have an account?<span className="span"> Login</span></p>
              
            </Link>
          </form>
        </div>
        <div>
          
          <p >
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default userRegister;
