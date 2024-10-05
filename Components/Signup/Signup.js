import React, { useContext, useState } from "react";
import { auth } from "../../store/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import FirebaseContext from "../../store/FirebaseContext"; 
import firebase from "firebase/compat/app";


export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const { firebase } = useContext(FirebaseContext);
    function submithandle(e) {
        e.preventDefault();
        console.log(firebase);
    }
    return (
        <div>
            <div className="signupParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={submithandle}>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input
                        className="input"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        type="text"
                        id="fname"
                        name="name"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        id="fname"
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input
                        className="input"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                        type="number"
                        id="lname"
                        name="phone"
                        defaultValue="Doe"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        id="lname"
                        name="password"
                        defaultValue="Doe"
                    />
                    <br />
                    <br />
                    <button>Signup</button>
                </form>
                <a>Login</a>
            </div>
        </div>
    );
}
