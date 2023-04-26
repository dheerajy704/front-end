import React, { useState } from 'react';
import axios from "axios"



const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const collectData = async () => {
        console.log(name, email, password);
        // let result = await fetch('http://localhost:8000/register', {
        //     method: 'POST',
        //     body: { name, email, password },
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        const result = await axios.post("http://localhost:8000/register", {name, email, password})

        // result = await result.json()
        console.log( result);
    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input className="inputBox" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' />
            <input className="inputBox" type="email"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <input className="inputBox" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
            <button onClick={collectData} className='appbutton' type="submit">Submit</button>
        </div>
    )
}
export default SignUp