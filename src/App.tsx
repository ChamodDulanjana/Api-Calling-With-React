import { useState } from 'react'
import Layout from "./pages/Layout.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateUser from "./pages/CreateUser.tsx";


function App() {
  const [header, setHeader] = useState("Manage Users")

  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-10 w-full">
      <h1 className="text-4xl font-bold text-gray-900 mb-20">{header}</h1>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout header={header} setHeader={setHeader}/>} />
                <Route path="/create" element={<CreateUser/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
