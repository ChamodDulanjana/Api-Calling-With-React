import { useState } from 'react'
import CreateUser from "./component/CreateUser.tsx";
import UpdateUser from "./component/UpdateUser.tsx";
import GetUser from "./component/GetUser.tsx";
import DeleteUser from "./component/DeleteUser.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-10 w-full">
      <h1 className="text-4xl font-bold text-gray-900 mb-20">Manage Users</h1>

      <div className="flex flex-row gap-16 items-center justify-center w-full">
        <CreateUser/>
        <UpdateUser/>
        <GetUser/>
        <DeleteUser/>
      </div>


    </div>
  )
}

export default App
