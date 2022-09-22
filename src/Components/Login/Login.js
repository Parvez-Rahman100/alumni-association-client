import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from])

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error('Something went wrong')
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password, data.regNumber);
    }

    return (
        <div className='flex h-screen container mx-auto justify-center backgroundImg items-center'>
            <div className="card w-96 bg-text bg-transparent text-white shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input text-black input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
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
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered text-black w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Your Reg Number</span>
                            </label>
                            <input className="input input-bordered text-black w-full max-w-xs" placeholder="Your Reg Number" type="number" {...register("regNumber", {
                                required: {
                                    value: true,
                                    message: 'Reg Number is Required'
                                },
                                minLength: {
                                    value: 11,
                                    message: 'Must be 11 characters'
                                },
                                maxLength: {
                                    value: 11,
                                    message: 'Must be 11 characters'
                                }

                            })} />
                            <label className="label">
                                {errors.regNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.regNumber.message}</span>}
                                {errors.regNumber?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.regNumber.message}</span>}
                            </label>
                        </div>


                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                </div>
                <p>New to Alumni Association? <Link to='/signup' className=' text-gray-900'> Signup Now</Link> </p>
            </div>
        </div >
    );
};

export default Login;