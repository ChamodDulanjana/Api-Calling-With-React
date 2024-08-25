import React from 'react';
import Button from "./button/Button.tsx";

const DeleteUser = () => {

    const handleClickEvent = () => {
        console.log("clicked");
    }

    return (
        <div>
            <Button color={"bg-black"} handleClick={handleClickEvent}> Delete </Button>
        </div>
    );
};

export default DeleteUser;