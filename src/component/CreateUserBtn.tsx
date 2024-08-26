import React, {useContext} from 'react';
import Button from "./button/Button.tsx";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext.tsx";



const CreateUserBtn = () => {

    const {setHeader} = useContext(GlobalContext);

    const handleClickEvent = () => {
        setHeader("Create User");
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