import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../../HomePage/Home/Home";
import LayOut from "../../Components/LayOut/LayOut";
import AboutUs from "../../Pages/AboutUs/AboutUs";



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
            }
        ]
    },
]);



export default router;