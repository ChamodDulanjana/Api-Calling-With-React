import React from 'react';
import Button from "./button/Button.tsx";
import {Link} from "react-router-dom";

const CreateUserBtn = () => {

    const handleClickEvent = () => {
        console.log("Click Event Register");
    }

    return (
        <div>
            <Link to={"/create"}>
                <Button color={"bg-blue-800"} handleClick={handleClickEvent}>
                    Register
                </Button>
            </Link>

        </div>
    );
};

export default CreateUserBtn;