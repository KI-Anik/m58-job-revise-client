import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const SocialLogin = () => {
const {signInWithGoogle} = useContext(AuthContext)

const handleGoogle =()=>{
    signInWithGoogle()
    .then(res=>{
        console.log(res.user)
    })
    .catch(err=>{
        console.log(err.message)
    })
}
    return (
        <div className='m-4 text-center'>
            <div className="divider ">or</div>
            <button onClick={handleGoogle} className="btn">Google</button>
        </div>
    );
};

export default SocialLogin;