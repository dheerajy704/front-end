import React, { useEffect, useState } from 'react';
import axios from "axios"
import {useNavigate} from 'react-router-dom'



const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const navigate = useNavigate();

    const navigate = useNavigate();
    useEffect(()=> {
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })

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

        if(result)
        // {
        //     navigate('/')
        // }
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/')

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