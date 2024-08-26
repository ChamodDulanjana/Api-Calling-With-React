import React, {useContext} from 'react';
import Button from "./button/Button.tsx";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext.tsx";

const UpdateUserBtn = () => {

    const {setHeader} = useContext(GlobalContext);

    const handleClickEvent = () => {
        setHeader("Update User");
    }

    return (
        <Link to="/update">
            <div>
                <Button color={"bg-green-700"} handleClick={handleClickEvent}> Update </Button>
            </div>
        </Link>
    );
};

export default UpdateUserBtn;