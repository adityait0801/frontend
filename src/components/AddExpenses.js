import { useState } from "react"

const AddExpenses =()=> {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [description ,setDescription] = useState("");

    const handleSubmit = async() => {
        const payload = {
            title, 
            amount, 
            description
        }

        const data = await fetch("http://localhost:7200/expense/add", {
            method : "POST",
            headers : {
                "content-type" : "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            },
            body : JSON.stringify(payload)
        })

        const json = data.json();
        console.log(json);
    }

    return <div>
        <div>
            <img 
            src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full h-full absolute"
            />
        </div>
        <div className="w-3/12 bg-gray-400 rounded-lg p-12 my-16 absolute mx-auto right-0 left-0 text-white bg-opacity-75">
            <h1 className="font-bold text-3xl py-4">Add Expenses</h1>
                <input type="text"
                placeholder="Enter The Title"
                className="my-2 p-4 rounded-lg w-full text-black"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <input type="text"
                placeholder="Enter The Amount"
                className="my-2 p-4 rounded-lg w-full text-black"
                value={amount}
                onChange={(e)=> setAmount(e.target.value)}
                />
                <input type="text"
                placeholder="Enter The Description"
                className="my-2 p-4 rounded-lg w-full text-black"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
                <button
                className="my-2 p-3 rounded-lg bg-green-400 text-black w-full font-bold text-xl"
                onClick={handleSubmit}
                >
                Submit
                </button>
            </div>
    </div>
}

export default AddExpenses;