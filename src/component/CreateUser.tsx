import React from 'react';
import Button from "./button/Button.tsx";

const CreateUser = () => {

    const handleClickEvent = () => {
        console.log("Click Event Register");
    }

    return (
        <div>
            <Button color={"bg-blue-800"} handleClick={handleClickEvent}> Register </Button>
        </div>
    );
};

export default CreateUser;