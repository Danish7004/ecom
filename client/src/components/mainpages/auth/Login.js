import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Login(props) {
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }
    // console.log(user)

    const loginSubmit = async(e) =>{
        e.preventDefault()
        try {
            const res =  await axios.post('https://ecom-eczsp7504-danishmoin21-gmailcom.vercel.app/user/login', {...user})
              console.log(res, "resp")
              localStorage.setItem('firstLogin', true)
              localStorage.setItem('accesstoken', res.data.accesstoken)
  
              window.location.href = "/";
  
          } catch (err) {
              alert(err.response.data.msg)
          }
    }


    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required 
                placeholder = "Email" value={user.email} onChange={onChangeInput}/>
                <input type="password" name="password" required autoComplete="on"
                placeholder = "Password" value={user.password} onChange={onChangeInput}/>
                
                <div className="row">
                        <button type="submit">Login</button>
                        <Link to = '/register'>Register</Link>
                </div>
            </form>

        </div>
    );
}


export default Login;