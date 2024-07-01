import React from "react";
import img from '../../assets/img/colorGradient.jpg';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/General/NavBar/LandingNav";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
      <div className="dark">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="dark hidden sm:block relative overflow-hidden animate-slide">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full absolute inset-0 object-cover hover:scale-105 transition-transform duration-500"
                src={img}
                alt="Sign Up"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
              <div className="absolute inset-0 shadow-lg"></div>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 sm:bg-gray-200 dark:sm:bg-gray-800 flex flex-col justify-center px-0 sm:px-10">
            <form className="max-w-md w-full mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-4">
              <h2 className="text-3xl font-semibold text-center pb-4 text-gray-800 dark:text-gray-200">
                Sign Up
              </h2>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded required"
                  name="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="last_name"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="phone_number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="student_id"
                  placeholder="Student ID"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="academic_year"
                  placeholder="Academic Year"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="telegram"
                  placeholder="@telegExample"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="instagram"
                  placeholder="@instExample"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="linkedin"
                  placeholder="linkedin_Example"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="section"
                >
                  <option value="">Select section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
              <div className="relative flex flex-col">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="department"
                >
                  <option value="">Select Department</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 0a9.997 9.997 0 00-7.071 2.929A9.997 9.997 0 000 10c0 2.683 1.059 5.207 2.929 7.071A9.997 9.997 0 0010 20c2.683 0 5.207-1.059 7.071-2.929A9.997 9.997 0 0020 10c0-2.683-1.059-5.207-2.929-7.071A9.997 9.997 0 0010 0zM2.929 12.929a7.963 7.963 0 000-5.657A7.963 7.963 0 017.071 4.93a7.963 7.963 0 015.657 0 7.963 7.963 0 010 5.657 7.963 7.963 0 01-5.657 2.829 7.963 7.963 0 01-5.657 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded"
                  name="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="f">Female</option>
                  <option value="m">Male</option>
                </select>
              </div>
              <button
                type="submit"
                 className="bg-indigo-600 text-white font-semibold py-3 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-300 w-full"
              >
                Sign Up
              </button>
        
              <button onClick={() => navigate("/login")}>
                  <p className="text-indigo-600 cursor-pointer transition-colors duration-300 hover:text-indigo-800">
                    Already have an account.
                  </p>
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
