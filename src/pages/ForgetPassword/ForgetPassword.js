import { getAuth } from 'firebase/auth';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const ForgetPassword = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [sendPasswordResetEmail,] = useSendPasswordResetEmail(auth);

    const onSubmit = (e,data) => {

        sendPasswordResetEmail(data.email);
        toast('Send Email')
       
       
        
       

    }
    useEffect(() => {
        reset({
            data: 'test'
        })
    }, [])




    return (
        <div className='flex justify-center  h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-center mb-5">Forget Password</h2>

                    {/* handle form   */}


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="Email"
                                name='email'
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
                        <input className='w-full max-w-xs btn btn-info text-white' type="submit" />
                        
                    </form>
                    <ToastContainer></ToastContainer>

                    {/* handle form   */}


                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;