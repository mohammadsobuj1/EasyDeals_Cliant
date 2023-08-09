import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';



const Header = () => {

    const { user, logOut } = useContext(AuthContext)



    const Navitems = <>

        <Link > HOme</Link>
        {
            user ? <Link to="/dashbord">DashBord</Link> : ""
        }
        <Link>Blogs</Link>
        <Link>Easy Donates</Link>
        <Link to="/about"> About Us  </Link>
        <p>{user?.displayName}</p>



    </>


    const logoutHandaler = () => {
        logOut()

    }



    return (
      
            <div className="navbar mx-11 rounded-xl w-[94%]  bg-black  fixed z-10 opacity-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white opacity-100 bg-black">
                            {
                                Navitems
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white opacity-100">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white gap-5 opacity-100 ">
                        {
                            Navitems
                        }
                    </ul>
                </div>
                <div className="navbar-end text-white">
                    {
                        user ? <>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <Link onClick={logoutHandaler}>Log Out</Link>
                          
                        </> : <>

                            <Link to="/login">
                                Log In
                            </Link>
                        </>
                    }
                </div>
            </div>
       
    );
};

export default Header;