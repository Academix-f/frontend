import React, { useState } from "react";
import img from "../../assets/img/colorGradient.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/General/NavBar/LandingNav";
import Validator from "./FormValidations";
import signUpData from "./signUpData";
import { SignUpApi } from "../../services/AuthenticationApi";
const initialFormData: signUpData = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  email: "",
  phone_number: "",
  student_id: "",
  academic_year: 0,
  section: "",
  department: 1,//for now
  gender: "",
  telegram: "",
  instagram: "",
  linkedin: "",
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<signUpData>(initialFormData);
  const [Cpassword , setCpassword] = useState("");

  const handleCpasswordChange =(e : any)=>{
    const {name , value} = e.target;
    setCpassword(value);
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // console.log(name , value)
  };

  const apiCall = async (data : signUpData) => {
    try {
        const response = await SignUpApi.signUp(data);
        // navigate("/login")
        console.log(response);
        navigate('/login')
    } catch (error) {
      console.log("Sign up error , signup page")
    }   
  }

  const handleSubmit = (e : any ) =>{
    e.preventDefault();
    const validated = new Validator(formData);

    const emptyFieldCheck = validated.allFilled();
    const emailCheck = validated.isValidEmail();
    const passwordCheck = validated.confimPassword(Cpassword);

    if(!emptyFieldCheck[0]){
      //output some message 
      return;
    }
    if(!emailCheck[0]) {
      //output some message proally tostify
      return;
    }
    if(!passwordCheck[0]){
      //same
      return;
    }

    if(formData.academic_year > 5){
      //cmon
      return;
    }

    apiCall(formData);
  }


  return (
    <>
      <Navbar />
      <div className="dark m-20">
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
                  id="first_name"
                  type="text"
                  className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded required"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="last_name"
                  type="text"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="last_name"
                  placeholder="Last Name"
                  value= {formData.last_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="signup-email"
                  type="email"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="signup-username"
                  type="text"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="phone-number"
                  type="number"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="student_id"
                  type="text"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="student_id"
                  placeholder="Student ID"
                  value = {formData.student_id}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="academic_year"
                  type="text"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="academic_year"
                  placeholder="Academic Year"
                  value={formData.academic_year}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="telegram"
                  type="text"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="telegram"
                  placeholder="@telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="instagram"
                  type="text"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="instagram"
                  placeholder="@instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="linked-in"
                  type="text"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="linkedin"
                  placeholder="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="signup-password"
                  type="password"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col">
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="Cpassword"
                  placeholder="Confirm Password"
                  value= {Cpassword}
                  onChange={handleCpasswordChange}
                />
              </div>
              <div className="flex flex-col">
                <select
                  className="w-full px-4 py-3 border text-gray-600 border-gray-300 rounded"
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                >
                  <option value="">Select section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
              <div className="relative flex flex-col">
                <select
                  className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded"
                  name="department"
                  value={formData.department}
                  onChange = {handleInputChange}
                 
                >
                  <option value="">Select Department</option>
                </select>
              </div>
              <div className="flex flex-col text-gray-600">
                <select
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded"
                  name="gender"
                  value={formData.gender}
                  onChange = {handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <button
              type= "submit"
                className="bg-indigo-600 text-white font-semibold py-3 mt-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-300 w-full"
                onClick = {handleSubmit} 
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
