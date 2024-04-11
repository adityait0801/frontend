import { Link } from "react-router-dom";
import { useState } from "react";
import Razorpay from "razorpay";

const Body = () => {
    const [displayRazorpay, setDisplayRazorpay] = useState(false);
    const [orderDetails, setOrderDetails] = useState({
        orderId: null,
        currency: null,
        amount: null,
    });
    

    // const handleCreateOrder = async (amount, currency) => {
    //     try {
    //         const response = await fetch('http://localhost:7200/purchase/premiummembership', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
                    
    //             },
    //             body: JSON.stringify({
    //                 amount: amount * 100, // Convert amount into lowest unit
    //                 currency,
    //                 keyId: process.env.RAZORPAY_KEY_ID,
    //                 keySecret: process.env.RAZORPAY_KEY_SECRET,
    //             })
    //         });

    //         const data = await response.json();
    //         console.log(data);

    //         if (data && data.order_id) {
    //             setOrderDetails({
    //                 orderId: data.order_id,
    //                 currency: data.currency,
    //                 amount: data.amount,
    //             });
    //             setDisplayRazorpay(true);
    //         }

    //         const rzp1 = new Razorpay(options);
    //         rzp1.open();

    //     } 

    //     catch (error) {
    //         console.error("Error creating order:", error);
    //     }
    // };

    const handleCreateOrder = async (amount, currency) => {
        try {
            const response = await fetch('http://localhost:7200/purchase/premiummembership', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    amount: amount * 100, // Convert amount into lowest unit
                    currency,
                    keyId: process.env.RAZORPAY_KEY_ID,
                    keySecret: process.env.RAZORPAY_KEY_SECRET,
                })
            });
    
            const data = await response.json();
            console.log(data);
    
            if (data && data.order_id) {
                const options = {
                    key: data.key_id,
                    order_id: data.order.id,
                    handler: async (response) => {
                        try {
                            // await fetch(UPDATE_PREMIUM_ENDPOINT, {
                            //     method: 'POST',
                            //     headers: {
                            //         'Content-Type': 'application/json',
                            //         Authorization: `Bearer ${localStorage.getItem("token")}`,
                            //     },
                            //     body: JSON.stringify({
                            //         order_id: data.order.id,
                            //         payment_id: response.razorpay_payment_id,
                            //     })
                            // });
                            alert("You are now a premium member");
                        } catch (error) {
                            console.log(error);
                        }
                    },
                };
    
                const rzp1 = new Razorpay(options);
                rzp1.open();
    
                rzp1.on("payment.failed", async (res) => {
                    try {
                        // await fetch(UPDATE_STATUS_FAILED, {
                        //     method: 'POST',
                        //     headers: {
                        //         'Content-Type': 'application/json',
                        //         Authorization: `Bearer ${localStorage.getItem("token")}`,
                        //     },
                        //     body: JSON.stringify({
                        //         order_id: data.order.id,
                        //     })
                        // });
                        alert("Payment Failed");
                    } catch (error) {
                        console.log(error)
                    }
                });
            }
    
        } catch (error) {
            console.error(error);
        }
    }
    
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
                <div className="flex m-4">
                    <button className="bg-yellow-500 rounded-lg text-white p-2 font-bold" onClick={()=> handleCreateOrder(500, 'INR')}>Buy Premium Membership</button>
                </div>
            </div>
        </div>  
    );
};

export default Body;
