import React, {useContext, useState} from 'react';
import axios from "axios";
import {GlobalContext} from "../context/GlobalContext.tsx";

const UpdateUser = () => {

    const {id, setId} = useContext(GlobalContext);

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
    }


    const handleUpdate = async (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            phone_number: phone
        }

        try {
            const response = await axios.patch(
                `https://57a015cc2c334f16b1088fd4615c3572.weavy.io/api/users/${id}`,
                JSON.stringify(userData),
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Add the authorization token
                        'Content-Type': 'application/json',  // Make sure content type is JSON
                    },
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
            console.log(userData);
        }
    }

    return (
        <div>
            <form
                className="flex flex-col gap-10 items-center justify-center w-full"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex gap-10 items-center justify-center w-full">
                    <input
                        type="text"
                        placeholder="Input User Id"
                        className="w-[39vw] border border-gray-300 rounded-lg px-5 py-2 outline-none"
                        onChange={(e) => setId(e.target.value)}
                    />

                    <button
                        className="bg-yellow-600 text-white px-5 py-2 rounded"
                        onClick={() => handleSubmit()}
                    >
                        Get User
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => setPhone(event.target.value)}
                    value={phone}
                />

                <button
                    className="bg-green-700 text-white px-5 py-2 rounded"
                    onClick={(e) => handleUpdate(e)}
                >
                    Update User
                </button>
            </form>
        </div>
    );
};

export default UpdateUser;