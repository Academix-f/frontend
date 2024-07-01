import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL: string = "http://localhost:8000";
const LogInApi = {
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
        if(error.responce){
            console.log("server responded with error code");
            
        }else if (error.requst){
            console.log("request error");
        }
        // console.log(error);   
    }
  },
};

const SignUpApi = {
    signUp : async () =>{}
};

export default LogInApi;
