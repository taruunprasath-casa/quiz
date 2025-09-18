import { useState } from "react";
import "../styles/LoginPage.css";
 import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
const navigate = useNavigate();
 const [email,setEmail] = useState('');
 const [password,setPassword] =useState('');
 const handleEmailChange = (e : any) =>{
    setEmail(e.target.value);
}
const handlePasswordChange =(e:any) =>{
   setPassword(e.target.value);
}
const handleSignIn =()=>{
    if(email == 'teacher@gmail.com' && password == '1234'){
       navigate('/TeacherDash');
    }
    if(email == 'student@gmail.com' && password == '12345'){
      navigate('/StudentDash');
    }
}
  return (
    <>
      <div className="main-container" id="glass-card">
        <div className="login-container">
          <div id="header">
            <h2>Sign in to Quizz App</h2>
            <p>Welcome User, Please Sign in to continue</p>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={handleEmailChange}
          />

          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <div>
            <button className="button" onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}
