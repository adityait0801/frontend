import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleLogout =()=> {
        localStorage.removeItem("token");
        navigate('/user/login');    
        console.log(localStorage.getItem("token"));
    }
    
    return (
        <div className="bg-gray-400 text-white flex items-center justify-between">
            <div className="flex items-center">
                <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAABpaWm/v7/t7e3W1taUlJTe3t52dnaqqqqgoKBCQkKDg4O0tLQtLS3MzMwdHR3z8/NbW1uJiYkiIiLT09MzMzPc3Nz5+flTU1OsrKy5ubkoKCjm5uakpKTCwsJubm6FhYU6OjpLS0sWFhYNDQ0+Pj5lklE7AAAC9UlEQVR4nO3Z63LaMBCGYXMGE8KpDiSEQGna+7/EglaALa1kZ4YwKPM+v4q8jvhwLXvtLAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCD2HROpvHNu+tA0QnadKv7Ts3gPD7/1uzaixfNN+FZg1/9bNwy1vrWQrb2ryP7Vpgz2YsZLOLzf5iiYbxoFZn0tS7hTure9K17L/+weUL58WoOz8gUPcWLBpFJF3UJM6l7UbetW94vnGDCXApX4ekr2xJMOG+F53g2myrH9+ES1p6HWdaWSmWLPcEnfsJ2X7Hcfm/CWa7NGlhBygolRzlNSxnb1P/Z2yd8bjKp6t3sP/Y3SMDflbFh6OfwPU7CN0mydccn2niSCe2xWrrDBzP8pzqYZsInda2xC1inOppmwq2aRc+dZkL7XZwriwTsO6WJJuxImkpvsJExtzVINKF2vOT7td3KVBP2vXPOnpte9yUJR/Ouz+3Abp5wrUzaje950fXyLM3AzKuM3JeOnNL73Jc2C5hlC1Nduk+X3T+8wkhC97/uXRL+apYvy6ZSf1lX7Nrjt/7JJsxmpj4/f3w1H5WHC+kmlOcln/aTPS+VtjiS0O1j7pLwb9OA5wcW9rmRrK0HpU4S7j9yn5vl5v2hNqm/UgTZry4f9P9217LE+kNhG3qztth1RytL9Yp/Is2SuajJtcNrp05STji5/Bn7cMpriU9STmhPvtX5AaP+ECvphHKjdrwGfpp/7NSipBPam+3YOpN4Qnsj05EQbutrpZ1Q3tL8k0MYeCuWdkK71hhe62vZA7zq+QqnV5OEg/iUklC9MF1JwveBMmmv5hd05NeEodd+sfcWzh3UOFhYWsRGwaLSbxzrDxs3iMb8spvf+jZI6LTAj5jw/JbG79d/TMKidrfUE9q3NJH36l84Dw8PmXDSmh1FFsC8HbRwH5oHC0vLWGcRqipdkLfBoqMvJgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB3+Q8I7SUYcvWVdwAAAABJRU5ErkJggg=="
                className="h-28 w-36"
                alt="Logo" 
                />
            <div>
                <h1 className="ml-2 text-3xl font-bold py-4 px-32">Track Your Expenses</h1>
            </div>
            </div>
            <ul className="flex py-4 px-6">
                <li className="mr-4 cursor-pointer font-bold text-lg hover:text-yellow-300 hover:text-xl"><Link to="/">Home</Link></li>
                <li className="mr-4 cursor-pointer font-bold text-lg hover:text-yellow-300 hover:text-xl"><Link to="/user/signup">Sign Up</Link></li>
                <li className="mr-4 cursor-pointer font-bold text-lg hover:text-yellow-300 hover:text-xl"><Link to="/user/login">Login</Link></li>
                <li className="mr-4 cursor-pointer font-bold text-lg hover:text-yellow-300 hover:text-xl"><Link to="/expense/add">Add Expenses</Link></li>
                <li className="mr-4 cursor-pointer font-bold text-lg hover:text-yellow-300 hover:text-xl"><Link to="/expense/List">Expenses List</Link></li>
                <li className="mr-4 cursor-pointer font-bold text-lg hover:text-yellow-300 hover:text-xl" onClick={handleLogout}>Logout</li>
            </ul>
        </div>
    );
}

export default Header;
