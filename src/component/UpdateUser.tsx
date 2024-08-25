import React from 'react';
import Button from "./button/Button.tsx";

const UpdateUser = () => {

    const handleClickEvent = () => {
        console.log("Click Event Update");
    }

    return (
        <div>
            <Button color={"bg-green-700"} handleClick={handleClickEvent}> Update </Button>
        </div>
    );
};

export default UpdateUser;