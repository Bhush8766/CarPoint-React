import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";

const userLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = React.useContext(userDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const responce = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (responce.status === 200) {
      const data = responce.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    // console.log(userData);
    setEmail("");
    setPassword("");
  };

  return (
    <>
    <Navbar/>
     <div className="mainLogin">
       
     <div className="LoginForm">
     <center>
     <img src="./src/img/c4.png" alt="Car Logo" />
     </center>
      <div>
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3>Enter your email</h3>
            <input
              className="EmailInput"
              type="email"
              name="email"
              id=""
              required
              placeholder="email@example.com"
              //RealTime value Update
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Enter your password</h3>
            <input
              className="EmailInput"
              type="password"
              name="password"
              id=""
              required
              placeholder="Password"
              //RealTime value Update
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            

            <button
              type="submit"
              className="btn1"
            >
              Login
            </button>
            
            <Link to="/signup" className="signup_option">
             <p className="conditionSign"> Don't have an account?<span className="span"> Sign up</span></p>
              
            </Link>
          </form>
        </div>
        <div>
          
        </div>
      </div>
     </div>

    </div>      
    </>
  );
};

export default userLogin;
