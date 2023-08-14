import Lottie from "lottie-react";
import animation from "../../assets/animation_ll3cmfz9.json";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";



const LogIn = () => {
    const { logIn, googlelogIn, githublogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = data => {

        const { email, password } = data;
        logIn(email, password)
            .then(result => {

                console.log(result)
                reset()
                navigate("/")
            })
            .catch(error => {
                console(error.message)
            })


    }
    console.log(errors)

    const gitHubHandaler = () => {
        githublogin()
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(error => console.log(error))
    }


    const googleHandaler = () => {
        googlelogIn()
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(error => console.log(error))
    }








    return (
        <div>

            <div className="bg-gray-50 min-h-screen flex items-center justify-center">

                <div className="bg-gray-100 flex rounded-2xl w-[70%] mx-auto  shadow-lg  p-5 items-center">

                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-center text-blue-700">Login</h2>
                        <p className="text-xs mt-4 mb-4 text-blue-700">If you are already a member, easily log in</p>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                            <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email "   {...register("email", { required: true, maxLength: 20 })} />
                            <div className="relative">

                                <input type="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password "  {...register("password", { required: true, maxLength: 20 })} />

                            </div>
                            {/* <button type="submit" >Login</button> */}
                            <input className="bg-blue-700 rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit" value="Login" />
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>

                        <div className=" items-center justify-around  ">
                            <Link onClick={googleHandaler} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-700">
                                <FaGoogle className="mr-3 text-xl" />
                                Login with Google
                            </Link>
                            <Link onClick={gitHubHandaler} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-blue-700">
                                <FaGithub className="mr-3 text-xl" />
                                Login with GitHub
                            </Link>



                        </div>
                        <div className="mt-5 text-xs border-b border-blue-700 py-4 text-blue-700">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div className="mt-3 text-xs flex justify-between items-center text-blue-700">
                            <p> Don't have an account?</p>
                            <Link to={"/registration"} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</Link>
                        </div>
                    </div>


                    <div className="md:block hidden w-1/2">
                        <Lottie animationData={animation} loop={true} />;

                    </div>
                </div>
            </div>
        </div>



    );
};

export default LogIn;




