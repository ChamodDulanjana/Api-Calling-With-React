import React from 'react';
import CreateUserBtn from "../component/CreateUserBtn.tsx";
import UpdateUserBtn from "../component/UpdateUserBtn.tsx";
import GetUserBtn from "../component/GetUserBtn.tsx";
import DeleteUserBtn from "../component/DeleteUserBtn.tsx";

interface Props {
    header:string;
    setHeader: React.Dispatch<React.SetStateAction<string>>;
}


const Layout = ({header, setHeader}:Props) => {
    return (
        <div className="flex flex-row gap-16 items-center justify-center w-full">
            {setHeader("Manage Users")}
            <CreateUserBtn header={header} setHeader={setHeader} />
            <UpdateUserBtn/>
            <GetUserBtn/>
            <DeleteUserBtn/>
        </div>
    );
};

export default Layout;