import React from "react";
import { Button } from "@material-ui/core"
import "./Login.css"
import {useDispatch} from "react-redux";
import { login } from "./features/appSlice"
import {auth, provider} from "./firebase";

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(
                login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid,
                })
            );
        }).catch((error) =>  alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt=""/>
                <Button variant="outlined" onClick={signIn}>Sign In</Button>
            </div>
            <h1 className="login__Footer">Snapchat Clone Created By Mohamed Ali Boullo</h1>
        </div>
    )
}

export default Login