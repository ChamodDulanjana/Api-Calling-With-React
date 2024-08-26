import React, {useContext} from 'react';
import Button from "./button/Button.tsx";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext.tsx";

const GetUserBtn = () => {

    const {setHeader} = useContext(GlobalContext);

    const handleClickEvent = () => {
        setHeader("Get User");
    }

    return (
        <Link to="/get">
            <div>
                <Button color={"bg-yellow-500"} handleClick={handleClickEvent}> Get User </Button>
            </div>
        </Link>
    );
};

export default GetUserBtn;