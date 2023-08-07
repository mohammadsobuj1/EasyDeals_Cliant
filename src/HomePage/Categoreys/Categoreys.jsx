import { Link } from 'react-router-dom';



const Categoreys = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-[95%] mx-auto mt-10">
            <Link >
                <div className="bg-gray-300 flex gap-4 rounded-3xl text-black items-center p-2 text-xl font-semibold border-b-4 hover:border-gray-600">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring-offset-base-100 ring-offset-2">
                            <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" />
                        </div>
                    </div>
                    <h1>Fashion</h1>
                </div>
            </Link>
            <Link>
                <div className="bg-gray-300 flex gap-4 rounded-3xl text-black items-center p-2 text-xl font-semibold border-b-4 hover:border-gray-600">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring-offset-base-100 ring-offset-2">
                            <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" />
                        </div>
                    </div>
                    <h1>Fashion</h1>
                </div>
            </Link>
            <Link>
                <div className="bg-gray-300 flex gap-4 rounded-3xl text-black items-center p-2 text-xl font-semibold border-b-4 hover:border-gray-600">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring-offset-base-100 ring-offset-2">
                            <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" />
                        </div>
                    </div>
                    <h1>Fashion</h1>
                </div>
            </Link>
            <Link>
                <div className="bg-gray-300 flex gap-4 rounded-3xl text-black items-center p-2 text-xl font-semibold border-b-4 hover:border-gray-600">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring-offset-base-100 ring-offset-2">
                            <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg" />
                        </div>
                    </div>
                    <h1>Fashion</h1>
                </div>
            </Link>
            
        </div>
    );
};

export default Categoreys;