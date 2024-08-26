import React, {useState} from 'react';
import axios from "axios";

interface User{
    uid: `${string}-${string}-${string}-${string}-${string}`;
    name: string;
    email: string;
    phone_number: string;
}

const CreateUser = () => {
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    const uuid = window.crypto.randomUUID();

    const userData : User = {
        uid: uuid,
        name: userName,
        email: email,
        phone_number: phone
    }

        try {
            const response = await axios.post(
                'https://57a015cc2c334f16b1088fd4615c3572.weavy.io/api/users',
                JSON.stringify(userData),
                {
                    headers: {
                        Authorization: `Bearer wys_3tx428BNbWM7q3YVFVKDiFhYrkdWnj0VefDy`,  // Add the authorization header
                        'Content-Type': 'application/json',  // Optional: specify content type
                    },
                }
            );

            console.log(response.data);
            // Handle success, maybe display a success message
        } catch (error) {
            console.error('There was an error!', error);
            // Handle error, maybe display an error message
        }

    }

    return (
        <div>
            <form
                className="flex flex-col gap-10 items-center justify-center w-full"
                onSubmit={e => e.preventDefault()}
            >
                <input
                    type="text"
                    placeholder="User Id"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={e => setUserId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="User Name"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={e => setUserName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={e => setPhone(e.target.value)}
                />

                <button
                    className="bg-blue-800 text-white px-5 py-2 rounded"
                    onClick={(e) => handleSubmit(e)}
                >
                    Register User
                </button>
            </form>
        </div>
    );
};

export default CreateUser;