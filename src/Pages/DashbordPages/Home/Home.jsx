import Lottie from "lottie-react";
import animation from "../../../assets/animation_ll4277dl.json";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";

const DashHome = () => {
    const {user}=useContext(AuthContext)
    return (
    <div className="flex items-center  bg-white">
         <div className="w-[70%]"> <Lottie animationData={animation} loop={true} />;</div>

        <div className=" lg:text-5xl text-2xl md:text-3xl font-medium font-mono" > {user?.displayName} </div>
        </div>
    );
};

export default DashHome;