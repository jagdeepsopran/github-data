import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SingleUser from "./SingleUser";

const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);
  const navigate = useNavigate();

  const getGitUsers = async () => {
    const res = await fetch("https://api.github.com/users?since=XXXX");
    const response = await res.json();
    console.log(response);
    setGitUsers(response);
    return response;
  };

  // console.log(gitUsers); 
  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        
        {gitUsers.map((user,idx) => 
          <SingleUser key={idx} user={user} />
        )}
      </div>
    </div>
  );
};

export default Users;
