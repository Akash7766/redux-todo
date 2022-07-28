import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return (
    <div
      className="App container mx-auto px-3 sm:px-0 py-14"
      data-theme="light"
    >
      <div>
        <h1 className="text-center text-2xl font-bold text-black">
          Save Your Contact Securely
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addUser" element={<AddUser />}></Route>
        <Route path="/edit/:id" element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
