import { useState } from 'react'
import Layout from "./pages/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateUser from "./pages/CreateUser.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-10 w-full">
      <h1 className="text-4xl font-bold text-gray-900 mb-20">Manage Users</h1>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} />
                <Route path="/create" element={<CreateUser/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
