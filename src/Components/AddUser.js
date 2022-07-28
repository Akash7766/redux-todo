import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Services/todosSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const contacts = useSelector((store) => store.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddUser = (e) => {
    e.preventDefault();
    const todo = {
      id: uuidv4(),
      name: e.target.name.value,
      number: e.target.number.value,
    };
    dispatch(addUser(todo));
    navigate("/");
  };
  return (
    <div className=" max-w-screen-sm mx-auto mt-10">
      <form className="" onSubmit={handleAddUser}>
        <div className="mb-2">
          <label htmlFor="">Name</label>
        </div>
        <div>
          <input
            className="input w-full bg-gray-300 rounded-none text-md"
            type="text"
            placeholder="Type contact name"
            name="name"
          />
        </div>
        <div className="mt-5 mb-2">
          <label htmlFor="">Number</label>
        </div>
        <div className=" mb-10">
          <input
            className="input w-full bg-gray-300 rounded-none text-md"
            type="number"
            placeholder="Type contact number"
            name="number"
          />
        </div>
        <input
          type="submit"
          value="Add User"
          class="btn btn-primary rounded-none"
        />
      </form>
    </div>
  );
};

export default AddUser;
