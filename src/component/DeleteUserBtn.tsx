import React, {useContext} from 'react';
import Button from "./button/Button.tsx";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext.tsx";

const DeleteUserBtn = () => {

    const {setHeader} = useContext(GlobalContext);

    const handleClickEvent = () => {
        setHeader("Delete User");
    }

    return (
        <Link to="/delete">
            <div>
                <Button color={"bg-black"} handleClick={handleClickEvent}> Delete </Button>
            </div>
        </Link>
    );
};

export default DeleteUserBtn;