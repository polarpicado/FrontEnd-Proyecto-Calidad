import React from 'react'
import './login.css'
import {
    app,
    googleAuthProvider,
} from "../../config/firebaseConfig";
import { useHistory } from "react-router-dom";
import googleBtn from '../../assets/imagenes/image 1.png'

const Login=()=> {
   const history = useHistory();

   const simpleSignIn = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            history.push("/")
        })
        .catch(error => {
            alert(error.message);
        });
};

    const socialLogin = async (provider) => {
        await app
            .auth()
            .signInWithPopup(provider)
            .then(() => { history.push('/'); })
            .catch(error => {
                alert(error.message);
            });
    };
  return (

        <div className="form-container">
            <h1>Iniciar sesión</h1>
            <div className="google">
                <button onClick={()=> socialLogin(googleAuthProvider)}> <img src={googleBtn} alt="" /> </button>
            </div>
            <form action="">
                <input type="email" placeholder='Correo electrónico' required="true"/>
                <input type="password" placeholder='Contraseña' required="true"/>
                <input type="submit"/>
            </form>

        </div>

  )
}
export default Login