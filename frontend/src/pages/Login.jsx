import { useState } from "react"
import axios from "axios"
//import { response } from "express";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        try{

            await axios.post("/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    console.log('Logged in')
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
                else if(res.data=="wrongpass"){
                    alert("Wrong password")
                }
            })

        }
        catch(e){
            console.log(e);

        }
    }
    
/*
    async function submit(e) {
        e.preventDefault();

        try {
            const response = await fetch("/", {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({ email: email, password: password })
            })
                .then((response) => response.json())
                .then((data) => {
                    if(data=="exist"){
                        console.log('Logged in')
                    }
                    else if(data=="notexist"){
                        alert("User have not sign up")
                    }
                    else if(data=="wrongpass"){
                        alert("Wrong password")
                    }
                })
        }
        catch(e){
            console.log(e);
    
        }
    }
*/      

    return (
        <div>
            <h1> Login </h1>
            <input type="email" onChange={(e) => {setEmail(e.target.value); console.log(e.target.value)}} placeholder="Email:"/>
            <input type="password" onChange={(e) => {setPassword(e.target.value); console.log(e.target.value)}} placeholder="Pass:"/>
            <input type="submit" onClick={submit}/>
        </div>
    )
}

export default Login