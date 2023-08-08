import { Link, Outlet } from "react-router-dom";


const Dashbord = () => {

    const isAdmin = false
    const isInstractor = true



    return (
        <div>
            <div className="drawer md:drawer-open bg-slate-100">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-gray-800 text-base-content ">
                        {/* Sidebar content here */}


                        <div className="flex flex-col w-full ">
                            <div className="grid  card bg-slate-300 rounded-box ">
                                <li>   <Link to="/">Home</Link></li>
                                <li>   <Link to="/dashbord">Main Menu</Link></li>
                                <li>   <Link to='/dashbord/my'>Profile</Link></li>
                                <li>   <Link to="/">Blogs</Link></li>
                                <li>   <Link to="/">Easy Donates</Link></li>

                            </div>
                            <div className=" my-4 border-b-4 border-red-400 "></div>
                            <div className="grid  card bg-slate-300 rounded-box ">
                                {
                                    isAdmin ? <>
                                        <li>   <Link to='/dashbord/my'>Profile</Link></li>
                                        <li>   <Link to="/">Blogs</Link></li>
                                        <li>   <Link to="/">Easy Donates</Link></li>
                                    </> : "" || isInstractor ? <>
                                        <li>   <Link to="/dashbord/addproduct">add products</Link></li>
                                        <li>   <Link to="/">My products</Link></li>
                                    </> : <>
                                        <li>   <Link to="/"> My Cart</Link></li>
                                        <li>   <Link to="/">My Odrder</Link></li>
                                    </>
                                }

                            </div>
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;