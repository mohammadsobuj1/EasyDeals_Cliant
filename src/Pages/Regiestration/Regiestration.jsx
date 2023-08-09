import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/animation_ll42yjzb.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Regiestration = () => {
    const { createUser, googlelogIn, githublogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')



    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = data => {
        const { name, email, password, confirm_password, role } = data;
        createUser(email, password)
            .then(result => {
                console.log(result)
                reset()
                // navigate('/login')

            })
            .catch(error => {
                setError(error.message)
            })

        console.log(data, "errrooooooo", errors)

    };

    const googleHandaler = () => {
        googlelogIn()
            .then(result => {
                console.log(result.user)
            })
    }




    const gitHubHandaler = () => {
        githublogin()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }





    return (
        <div>

            <div className="bg-gray-50 min-h-screen flex items-center justify-center">

                <div className="bg-gray-100 flex  rounded-2xl shadow-lg max-w-[90%] mx-auto p-5 items-center">

                    <div className="w-full px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-center text-blue-600">Create Account</h2>
                        <p className="text-xs mt-4 mb-4 text-blue-600">If you are already a member, easily log in</p>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>


                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("name", { required: true, maxLength: 20 })} />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name :  </label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("email", { required: true, })} />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("password", {required:true} )} />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password :  </label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("confirm_password", { required: true, maxLength: 20 })} />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                                </div>
                            </div>


                            <div className="flex items-center justify-around ">
                                <div className="text-xl font-medium font-sans"> Role :</div>

                                <div className=" ">
                                    <input id="list-radio-license" type="radio" value="user" name="list-radio" className="w-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-blue-500" {...register("role", { required: true, maxLength: 20 })} />
                                    <label className="w-full py-3 ml-2 text-sm font-medium text-blue-900 dark:text-blue-600">User </label>
                                </div>

                                <div className="flex items-center ">
                                    <input id="list-radio-license2" type="radio" value="sellar" name="list-radio" className="w-4  text-blue-600 bg-blue-100 border-blue-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 dark:bg-blue-600 dark:border-blue-500" {...register("role", { required: true, maxLength: 20 })} />
                                    <label className="w-full py-3 ml-2 text-sm font-medium text-blue-900 dark:text-blue-600">Sellar </label>
                                </div>



                            </div>
                            {/* <button type="submit" >Login</button> */}
                            <input className=" bg-blue-600 rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit" value="Create Account" />
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>

                        <div className="md:flex items-center justify-around gap-5 ">
                            <Link onClick={googleHandaler} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-600">
                                <FaGoogle className="mr-3 text-xl" />
                                Login with Google
                            </Link>
                            <Link  onClick={gitHubHandaler} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-600">
                                <FaGithub className="mr-3 text-xl" />
                                Login with GitHub
                            </Link>



                        </div>

                        <div className="mt-5 text-xs border-b border-blue-600 py-4 text-blue-600">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div className="mt-3 text-xs flex justify-between items-center text-blue-600">
                            <p> Alredy have an account?</p>
                            <Link to={"/login"} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>
                        </div>
                    </div>


                    <div className="md:block hidden w-[70%] text-blue-500">
                        <Lottie animationData={animation} loop={true} />;

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Regiestration;