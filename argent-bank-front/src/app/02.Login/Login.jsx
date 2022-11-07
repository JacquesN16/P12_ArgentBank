import './login.scss'
import {useState} from "react";
import LoginAPI from "./api";

export default function Login () {

    const [username, setUsername] = useState('john@smith.mail')
    const [password, setPassword] = useState('12345')


    const login = async (e) => {
        e.preventDefault()
        try{
            const res = await LoginAPI.Login(username, password)

        } catch (err) {
            console.log(err)
        }
    }



    return (
        <main className="login-page">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            onChange={(e)=>setUsername(e.target.value)}
                        />

                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button
                        className="sign-in-button"
                        onClick={(e)=>login(e)}
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}
