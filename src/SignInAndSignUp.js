import React,{useState,useEffect} from "react";
import "./SignInAndSignUp.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Axios from "axios";
import {ReactComponent as Logo } from "./assets/Logo.svg";

function SignInAndSignUp() {
  const [count, setCount] = useState([]);

  useEffect(()=>{
    const getUserCount = async () => {
      const getCount = await Axios({method: "GET", url :"http://localhost:8090/counts"});
      const properData = getCount.data[0];
      const count = properData.user_count;
      setCount(count);
      console.log(count);
    }
  
    getUserCount();
  }, []);
  


  return (
    <div>
      

<div  className="SignInAndSignUp row">
<div className="signinlogo" >
                    <Logo />    
      </div>
      <div className="col">
        <SignIn />
      </div>
      <div className="col">
        <SignUp />
      </div>
    </div>
    </div>
    
  );
}



export default SignInAndSignUp;
