import axios from "axios";
import signUpData from "../pages/register/signUpData";

const BASE_URL: string = "http://localhost:8000";

export const LogInApi = {
  logIn: async (username: string, password: string) => {
    try {
      const responce = await axios.post(
        `${BASE_URL}/user/login/`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return responce;
    } catch (error: any) {
      if (error.responce) {
        console.log("server responded with error code");
      } else if (error.requst) {
        console.log("request error");
      }
      // console.log(error);
    }
  },
};


export const SignUpApi = {
  signUp: async (signUpData : signUpData) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/`, 
        signUpData , {
          headers : {
            "Content-Type" : "application/json"
          }
        });

      return response;
    } catch (error: any) {
      if (error.responce) {
        console.log("server responded with error code");
      } else if (error.requst) {
        console.log("request error");
      }
    }
  },
};


