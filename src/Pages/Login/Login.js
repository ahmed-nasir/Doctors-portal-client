import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        console.log(user);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">LogIn</h2>
                    

                    <div className='divider'>OR</div>
                    <div
                    onClick={() => signInWithGoogle()}
                     className='btn  btn-outline'
                     >Continue With Google</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;