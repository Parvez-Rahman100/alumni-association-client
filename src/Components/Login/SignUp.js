import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import axios from 'axios';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    let signInError;

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || updateError?.message}</small></p>
    }


    const onSubmit = async (data) => {

        try {
            const url = 'http://localhost:5000/register';
            const result = await axios.post(url, data)
            if (result?.data === false) {
                alert('Please provide valid registration number')
                return;

            } else {
                await createUserWithEmailAndPassword(data.email, data.password, data.regNumber);
                await updateProfile({ displayName: data.name });
                navigate('/');

            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='flex h-screen container mx-auto justify-center text-white backgroundImg items-center'>
            <div className="card w-96 bg-text bg-transparent shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered text-black w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered text-black w-full max-w-xs"
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
                                    message: 'Value Must be 11 characters'
                                },
                                maxLength: {
                                    value: 11,
                                    message: 'Value Must be 11 characters'
                                }

                            })} />
                            <label className="label">
                                {errors.regNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.regNumber.message}</span>}
                                {errors.regNumber?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.regNumber.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs btn-primary text-white' type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already have an account? <Link className='text-secondary mx-3' to="/login">Please login</Link></small></p>
                </div>
            </div>
        </div >

    );
};

export default SignUp;