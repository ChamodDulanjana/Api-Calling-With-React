import React from 'react';
import CreateUserBtn from "../component/CreateUserBtn.tsx";
import UpdateUserBtn from "../component/UpdateUserBtn.tsx";
import GetUserBtn from "../component/GetUserBtn.tsx";
import DeleteUserBtn from "../component/DeleteUserBtn.tsx";




const Layout = () => {
    return (
        <div className="flex flex-row gap-16 items-center justify-center w-full">
            <CreateUserBtn/>
            <UpdateUserBtn/>
            <GetUserBtn/>
            <DeleteUserBtn/>
        </div>
    );
};

export default Layout;