import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "./Card";

const Home = () => {
  const contact = useSelector((store) => store.todos);

  return (
    <div className=" max-w-screen-md mx-auto">
      <div className="my-10">
        <Link to="/addUser">
          {" "}
          <button className="btn btn-primary btn-sm">Add User</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {contact.map((c) => (
          <Card key={c.id} contact={c} />
        ))}
      </div>
    </div>
  );
};

export default Home;
