import { getAuth } from 'firebase/auth';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Sheared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useNavigation } from 'react-day-picker';
import { useEffect } from 'react';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token]=useToken( user || gUser);
    
   useEffect(()=>{
       if(token){
           navigate(from, { replace: true });

       }
       
   }, [token, navigate,from])

    let singError;
     if( loading || gLoading){
         return <Loading></Loading>
     }
     if(error || gError){
         singError = <small className='text-red-500'>{error?.message}{gError?.message}</small>
     }
   
    const onSubmit = data => {

        signInWithEmailAndPassword(data.email,data.password) ;
        reset({data:" "})

        
        

        
       
    }
    const handleForgetPassword =()=>{
        navigate("/forget-password")
    }
  



    return (
        <div className='flex justify-center  h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-center">Login</h2>

                    {/* handle form   */}


                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <span onClick={handleForgetPassword} className='text-secondary font-bold cursor-pointer'>Forget Password?</span>

                            </label>
                            
                        </div>


                        {singError}
                        <input className='w-full max-w-xs btn btn-info text-white' type="submit" />
                    </form>
                    <p><small> New to Doctors portal?<Link to='/signup' className='text-secondary font-bold'> Create new           account</Link></small></p>

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

export default Login;