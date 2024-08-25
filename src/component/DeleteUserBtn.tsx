import React from 'react';
import Button from "./button/Button.tsx";

const DeleteUserBtn = () => {

    const handleClickEvent = () => {
        console.log("clicked");
    }

    return (
        <div>
            <Button color={"bg-black"} handleClick={handleClickEvent}> Delete </Button>
        </div>
    );
};

export default DeleteUserBtn;