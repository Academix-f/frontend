import React, { useState } from "react";
import img from '../../assets/img/colorGradient.jpg';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/General/NavBar/LandingNav";
import {LogInApi} from "../../services/AuthenticationApi";
import "../../styles/others.css"

const LogIn: React.FC = () => {
  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    username : "",
    password : ""
  })

async function handleSubmit(e : any) {
  e.preventDefault();
  try {
    const response = await LogInApi.logIn(formData.username , formData.password);
    console.log(response)
    //redux
  } catch (error) {
    console.log("Error in the log in page api call");
  }
  
}

const handleCange = (e : any) => {
    const {name , value} = e.target;
    setFormData({ ...formData , [name] : value});
    
}

  return (
    <>
    <Navbar/>
      <div className= "dark m-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
          <div className="dark hidden sm:block relative overflow-hidden animate-slide">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full absolute inset-0 object-cover hover:scale-105 transition-transform duration-500"
                src={img}
                alt="Login"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 shadow-lg"></div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 sm:bg-gray-200 dark:sm:bg-gray-800 flex flex-col justify-center px-0 sm:px-10">
            <form className="max-w-md w-full mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-center pb-4 text-gray-800 dark:text-gray-200">
                Login
              </h2>
              <p className="text-base text-center mb-6 text-gray-600 dark:text-gray-400 font-bold">
                Welcome to <span className="text-indigo-700">Academix</span>
              </p>

              <div className="flex flex-col pb-4">
                <label className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
                  Username
                </label>
                <input
                  id = "login-username"
                  className="border text-gray-800 border-gray-300 dark:border-gray-600 p-3 rounded-md focus:outline-none focus:border-indigo-600 transition-all duration-300"
                  type="text"
                  name="username"
                  placeholder="Enter your Username"
                  onChange={ handleCange }
                />
              </div>
              <div className="flex flex-col pb-4">
                <label className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
                  Password
                </label>
                <input
                  id = "login-password"
                  className="border text-gray-800 border-gray-300 dark:border-gray-600 p-3 rounded-md focus:outline-none focus:border-indigo-600 transition-all duration-300"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={ handleCange }
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold py-3 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-300 w-full"
                onClick={ handleSubmit }
              >
                Sign In
              </button>
              <div className="flex items-center justify-between mt-4">
                <label className="flex items-center text-gray-600 dark:text-gray-400">
                  <input className="mr-2" id= "login-checkbox" type="checkbox" />
                  <span>Remember Me</span>
                </label>
                <button onClick={() => navigate("/sign-up")}>
                  <p className="text-indigo-600 cursor-pointer transition-colors duration-300 hover:text-indigo-800">
                    Create Account
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
