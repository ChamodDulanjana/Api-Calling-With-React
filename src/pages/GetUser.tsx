import React, { useState} from 'react';
import axios from "axios";

const GetUser = () => {
    const [id, setId] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const token = "wys_3tx428BNbWM7q3YVFVKDiFhYrkdWnj0VefDy";

    const handleSubmit = async () => {
        try {
            const response = await axios.get(
                `https://57a015cc2c334f16b1088fd4615c3572.weavy.io/api/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Add the Authorization header
                        'Content-Type': 'application/json',  // Optional: specify content type
                    },
                });

            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone_number);
            //setUserData(response.data);
            console.log(response.data);
            // Handle the successful response
        } catch (error) {
            console.error('There was an error!', error.response ? error.response.data : error.message);
            // Handle the error, maybe display an error message
        }
    };



    return (
        <div>
            <form
                className="flex flex-col gap-10 items-center justify-center w-full"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    placeholder="Input User Id"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={e => setId(Number(e.target.value))}
                />
                <button
                    className="bg-yellow-600 text-white px-5 py-2 rounded"
                    onClick={() => handleSubmit()}
                >
                    Get User
                </button>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => event.preventDefault()}
                    value={name}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => event.preventDefault()}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => event.preventDefault()}
                    value={phone}
                />
            </form>
        </div>
    );
};

export default GetUser;