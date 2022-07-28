import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletetUser } from "../Services/todosSlice";

const Card = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDel = (id) => {
    dispatch(deletetUser({ id }));
  };
  const { id, name, number } = contact;
  return (
    <div className="flex justify-between bg-gray-300 p-3 rounded">
      <div>
        <p className="font-semibold text-2xl md:text-md">{name}</p>
        <p className="text-sm">{number}</p>
      </div>
      <div className="flex gap-3 items-center">
        <a href={`tel:${number}`}>
          <i class="fa-solid fa-phone-flip"></i>
        </a>
        <Link to={`edit/${id}`}>
          <i class="fa-solid fa-pen-to-square"></i>
        </Link>
        <button onClick={() => handleDel(id)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
