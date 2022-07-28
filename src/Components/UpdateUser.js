import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editUser } from "../Services/todosSlice";

const UpdateUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const contact = useSelector((state) => state.todos);
  const exitsContact = contact.filter((con) => con.id === params.id);
  const { id, name, number } = exitsContact[0];
  const dispatch = useDispatch();
  const [conName, setConName] = useState(name);
  const [conNumber, setConNumber] = useState(number);
  console.log(id, name, number);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        id,
        name: conName,
        number: conNumber,
      })
    );
    navigate("/");
  };

  return (
    <div className=" max-w-screen-sm mx-auto mt-10">
      <form className="" onSubmit={handleUpdate}>
        <div className="mb-2">
          <label htmlFor="">Name</label>
        </div>
        <div>
          <input
            className="input w-full bg-gray-300 rounded-none text-md"
            type="text"
            placeholder="Type contact name"
            name="name"
            value={conName}
            onChange={(e) => setConName(e.target.value)}
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
            value={conNumber}
            onChange={(e) => setConNumber(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Update User"
          class="btn btn-primary rounded-none"
        />
      </form>
    </div>
  );
};

export default UpdateUser;
