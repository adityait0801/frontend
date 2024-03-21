import { Link } from "react-router-dom";

const Body =() => {
    return ( 
    <div>
        <div>
            <img 
            src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full h-full absolute"
            />
        </div>
        <div className="bg-gray-500 h-screen flex flex-col justify-center items-center absolute right-0 left-0 text-white bg-opacity-10">
            <h1 className="text-4xl font-bold mb-8">Welcome to Expense Tracker</h1>
            <p className="text-2xl font-bold mb-12">Track your expenses effortlessly and manage your finances better.</p>
            <div className="flex">
                <Link to="/user/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-4">Sign Up</Link>
                <Link to="/user/login" className="bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">Login</Link>
            </div>
        </div>
    </div> 
)}

export default Body;