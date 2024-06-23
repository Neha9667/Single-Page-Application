import React, { useState} from "react";
import axios from "axios";
import './PostForm.css';


function PostForm() {
 const [email,setEmail]=useState('')
 console.log({email})

const handleEmail=(e)=>{
  setEmail(e.target.value)

}

const handleApi=()=>{
  console.log({email})
  axios.post("http://34.225.132.160:8002/api/Create",{
    email:email
  }).then(result=>{
    console.log(result.data);
    alert("Form submitted");
  })
  .catch(error=>{
    alert("service error");
    console.log(error);
  })
}


  return(
    <div>
     
      <form >
       
        <input
          type="email"
          onChange={handleEmail}
          value={email}
          placeholder="abc@gmail.com"
        ></input>
        
        <button onClick={handleApi}>Contact Me</button>

      </form>
    </div>
  );
}

export default PostForm;
