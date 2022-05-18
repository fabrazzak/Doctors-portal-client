import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Sheared/Loading';
import { Link } from 'react-router-dom';

const Singup = () => {
   
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, pUpdating, pError] = useUpdateProfile(auth);
   
    let singError;
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError || pError) {
        singError = <small className='text-red-500'>{error?.message}{gError?.message} {pError?.message}</small>
    }

    const onSubmit = async (data )=> {

       await createUserWithEmailAndPassword(data.email, data.password,data.displayName);
         await updateProfile({ displayName: data.name });
          reset( { data})

    }

    return (
        <div className='flex justify-center  h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-center">Sing Up</h2>

                    {/* handle form   */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"

                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })} />
                            <label className="label">
                                {errors.text?.type === "required" && <span className="label-text-alt text-red-500">{errors.text.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="Email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email"
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

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
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 character or longer"
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {singError}
                        <input className='w-full max-w-xs btn btn-info text-white' type="submit" />
                    </form>
                    <p><small>Already have an account?<Link to='/login' className='text-secondary font-bold'> Please Login</Link></small></p>

                    {/* handle form   */}

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google</button>


                </div>
            </div>
        </div>
    );
};

export default Singup;