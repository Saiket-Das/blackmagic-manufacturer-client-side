import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import useJwtToken from '../../../Hooks/useJwtToken';




const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, emailError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [jwtToken] = useJwtToken(user || googleUser);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true } || '/');
        }
    }, [user, googleUser, navigate, from]);

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    let errorMsg;
    if (emailError || googleError) {
        errorMsg = <p className='text-center text-red-500 uppercase font-semibold'>
            {emailError?.message.slice(22, -2) ||
                googleError?.message.slice(22, -2)}
        </p>
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log('User logined')
    }


    return (
        <div className='flex lg:h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">LOGIN </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>


                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    {/* ERROR MESSAGE */}
                    {errorMsg}

                    <p className='text-sm text-center'>New to doctors portal?
                        <span> <Link
                            to='/signup'
                            className='text-secondary font-bold'>
                            Create new account
                        </Link></span>
                    </p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;