import React from 'react'
import {
    app,
    googleAuthProvider,
} from "../../config/firebaseConfig";
import { useHistory } from "react-router-dom";


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
    <React.Fragment>
        <form action="">
            <input type="email" /><br/>
            <input type="password" /><br/>
            <input type="submit" />
        </form>
        <div className="google">
            <button onClick={()=> socialLogin(googleAuthProvider)}>Iniciar sesion con google</button>
        </div>
    </React.Fragment>
  )
}
export default Login