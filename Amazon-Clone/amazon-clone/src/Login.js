import React, { useState } from 'react'
import { Link , useHistory} from 'react-router-dom'
import "./Login.css"
import {auth} from "./firebase";
// import { useStateValue } from './StateProvider';

function Login() {

    const history = useHistory();
    
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");



    const signin = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            if(auth)
            {
                history.push("/");
            }
        }).catch(err => alert(err.message));
    }


    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if(auth)
            {
                history.push("/");
            }
        }).catch(err => alert(err.message));
    }

    return (
        <div className="login">

            <Link to="/">

                <img 

                    className="login__image" 
                    
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    
                    alt="" 
                
                />
            
            </Link>

            <div className="login__container">


                <h1>Sign In</h1>


                <form>
                    <h5>E-mail</h5>


                    <input type="text" required value={email} onChange={e => setEmail(e.target.value)}/>


                    <h5>Password</h5>


                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>


                    <button className="login__signInButton" onClick={signin} type="submit" >Sign In</button>
                </form>


                <p>


                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                
                
                </p>


                <button className="login__registerButton" onClick={register}>Create Amazon Account</button>


            </div>
   
        </div>
    )
}

export default Login
