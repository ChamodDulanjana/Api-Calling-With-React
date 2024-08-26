import React, {useContext} from 'react';
import Button from "./button/Button.tsx";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext.tsx";



const CreateUserBtn = () => {

    const {header, setHeader} = useContext(GlobalContext);

    const handleClickEvent = () => {
        header === "Manage Users" ? setHeader("Create Users") : setHeader("Manage Users");
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