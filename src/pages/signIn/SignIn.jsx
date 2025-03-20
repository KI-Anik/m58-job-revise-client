import React, { useContext } from 'react';
import signInLottieData from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';

const SignIn = () => {
    const {signInUser}= useContext(AuthContext)
    const location =useLocation()
    console.log('sign in', location)
    const navigate = useNavigate()

    const handleSignIn=e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const from = location?.state || '/'

        signInUser(email,password)
        .then(res=>{
            console.log(res.user)
            navigate(from)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
         <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="ml-10 mt-4 text-5xl font-bold">Log in now!</h1>

                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Log in</button>
                        </fieldset>
                    </form>
                <SocialLogin></SocialLogin>
                </div>
                <div className="text-center lg:text-left w-96">
                   <Lottie animationData={signInLottieData}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default SignIn;