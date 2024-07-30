import { useState } from "react"
import axios from "axios"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        try{

            await axios.post("http://192.168.1.25:5173/",{
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