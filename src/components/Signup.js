import { useState } from "react";

const Signup =()=> {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async()=> {
        
        const payload = {
            name,
            email, 
            password
        }
        try
        {
            const data = await fetch("http://localhost:7200/user/signup", {
                method : "POST",
                headers : {
                    "content-type" : "application/json",
                },
                body : JSON.stringify(payload)
            })
        const json = await data.json();
        console.log(json);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return (<div>
        <div>
            <img 
            src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full h-full absolute"
            />
        </div>
        <div className="w-3/12 bg-gray-400 rounded-lg p-12 my-16 absolute mx-auto right-0 left-0 text-white bg-opacity-75">
            <h1 className="font-bold text-3xl py-4">Sign Up</h1>
            <input type="text"
            placeholder="Enter Your Name"
            className="my-2 p-4 rounded-lg w-full text-black"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <input type="text"
            placeholder="Enter Your Email"
            className="my-2 p-4 rounded-lg w-full text-black"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <input type="text"
            placeholder="Enter Your Password"
            className="my-2 p-4 rounded-lg w-full text-black"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button
            className="my-2 p-3 rounded-lg bg-green-400 text-black w-full font-bold text-xl"
            onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    </div>
)}

export default Signup;