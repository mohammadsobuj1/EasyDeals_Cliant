import { createBrowserRouter } from "react-router-dom";
import Home from "../../HomePage/Home/Home";
import LayOut from "../../Components/LayOut/LayOut";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Dashbord from "../../Components/LayOut/Dashbord";
import MyAccount from "../../Pages/DashbordPages/MyAccount/MyAccount";
import DashHome from "../../Pages/DashbordPages/Home/Home";
import AddProducts from "../../Pages/DashbordPages/Instractor/AddProducts/AddProducts";
import LogIn from "../../Pages/LogIn/LogIn";
import Regiestration from "../../Pages/Regiestration/Regiestration";
import PrivetRoute from "../../Components/PrivateRoute/PrivetRoute";
import AllUsers from "../../Pages/DashbordPages/Admin/AllUsers/AllUsers";





const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/about",
                element: <AboutUs />
            },



        ]
    },

    {
        path: "dashbord",
        element: <PrivetRoute><Dashbord /></PrivetRoute>,
        children: [
            {
                path: "/dashbord",
                element: <DashHome />
            },
            {
                path: "/dashbord/my",
                element: <MyAccount />
            },
            {
                path: "/dashbord/addproduct",
                element: <PrivetRoute><AddProducts /></PrivetRoute>
            },
            {
                path: "/dashbord/allusers",
                element: <AllUsers />
            },
        ]
    },
    {
        path: "/login",
        element: <LogIn />
    },
    {
        path: "/registration",
        element: <Regiestration />
    },

]);









export default router;
