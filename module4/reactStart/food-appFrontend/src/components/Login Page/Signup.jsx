import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/login.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

function Signup(props) {
    // react-router-dom
     const history = useHistory();
    const { signUp } = useAuth()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirm, setConfirm] = useState("");
    const handleSignup = async () => {
        console.log("user data",name, password, email, confirm);
        try {
            console.log("sending request");
            // do signup
            await signUp(name, password, email, confirm);
            // send user to login 
            history.push("/login");
        }
        catch (err) {
            console.log(err);
        }
    }
// click
    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>SIGN UP</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Name</div>
                        <input className="name input" type="text" name="Name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Confirm  Password</div>
                        <input className="confirmPassword input" type="password" name="ConfirmPassword" placeholder="**********" onChange={(e) => setConfirm(e.target.value)} required/>
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleSignup}>
                        Sign Up
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Signup;
