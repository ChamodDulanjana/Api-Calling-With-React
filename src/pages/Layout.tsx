import React, {useContext} from 'react';
import CreateUserBtn from "../component/CreateUserBtn.tsx";
import UpdateUserBtn from "../component/UpdateUserBtn.tsx";
import GetUserBtn from "../component/GetUserBtn.tsx";
import DeleteUserBtn from "../component/DeleteUserBtn.tsx";
import {GlobalContext} from "../context/GlobalContext.tsx";




const Layout = () => {

    const {setHeader} = useContext(GlobalContext);

    handleSetHeader();

    function handleSetHeader(){
        setHeader("Manage Users");
    }

    return (
        <div className="flex flex-row gap-16 items-center justify-center w-full">
            <CreateUserBtn/>
            <UpdateUserBtn/>
            <GetUserBtn/>
            <DeleteUserBtn/>
            {}
        </div>
    );
};

export default Layout;