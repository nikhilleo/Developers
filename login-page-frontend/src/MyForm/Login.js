import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const history = useHistory();

    const submit = async (event) => {
        event.preventDefault();
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                "http://localhost:8080/login",
                loginUser
            );
              console.log(loginRes);
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            console.log(err.message)
        }
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label >Email address</label>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" name='password' class="form-control" id="exampleInputPassword1" required></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
)}    