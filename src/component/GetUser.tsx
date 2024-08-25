import React from 'react';
import Button from "./button/Button.tsx";

const GetUser = () => {

    const handleClickEvent = () => {
        console.log("Click Event Get");
    }

    return (
        <div>
            <Button color={"bg-yellow-500"} handleClick={handleClickEvent}> Get User </Button>
        </div>
    );
};

export default GetUser;