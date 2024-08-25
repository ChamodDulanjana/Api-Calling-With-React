import React from 'react';
import Button from "./button/Button.tsx";
import {Link} from "react-router-dom";

interface Props {
    header:string;
    setHeader:React.Dispatch<React.SetStateAction<string>>;
}

const CreateUserBtn = ({header, setHeader}:Props) => {

    const handleClickEvent = () => {
        setHeader("Register User");
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