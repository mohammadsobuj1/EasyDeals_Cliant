import { Outlet } from "react-router-dom";
import Header from "../../HomePage/Header/Header";
import Footer from "../../Pages/Footer/Footer";



const LayOut = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default LayOut;