import React, {useContext, useState} from 'react';
import {GlobalContext} from "../context/GlobalContext.tsx";
import axios from "axios";


const DeleteUser = () => {

    const {id, setId} = useContext(GlobalContext);

    const token = "wys_3tx428BNbWM7q3YVFVKDiFhYrkdWnj0VefDy";

    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        phone_number: ""
    });

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

            setUserDetail(response.data);
            console.log(response.data);
            // Handle the successful response
        } catch (error) {
            console.error('There was an error!', error.response ? error.response.data : error.message);
            // Handle the error, maybe display an error message
        }
    }


    const handleDelete = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(
                `https://57a015cc2c334f16b1088fd4615c3572.weavy.io/api/users/${id}/trash`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Add the Authorization header
                        'Content-Type': 'application/json',  // Optional: specify content type
                    },
                });
            console.log(response);
        }catch (error) {
            console.error('There was an error!', error.response ? error.response.data : error.message);
            // Handle the error, maybe display an error message
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
                    onChange={event => event.preventDefault()}
                    value={userDetail.name}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => event.preventDefault()}
                    value={userDetail.email}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-[50vw] border border-gray-300 rounded-lg px-5 py-2 leading-tight outline-none"
                    onChange={event => event.preventDefault()}
                    value={userDetail.phone_number}
                />

                <button
                    className="bg-black text-white px-5 py-2 rounded"
                    onClick={(e) => handleDelete(e)}
                >
                    Delete User
                </button>
            </form>
        </div>
    );
};

export default DeleteUser;