import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ repo }) => {
  let navigate = useNavigate();
  // const handleUser = () => {
  //   navigate(`/repos/${repo.full_name}`);
  // };
  return (
    <div className="user-card-cont">
      <img
        src={repo.owner.avatar_url}
        alt="userAvatar"
        className="user-avatar"
      />
      <span className="username">{repo.name}</span>

      <span className="repo-lang-span">Language: {repo.language}</span>
      <div>
        By: <button className="repo-owner">{repo.owner.login}</button>
      </div>

      <button onClick={() => navigate(`repo/${repo.owner.login}`)}>View Repo</button>
    </div>
  );
};

export default UserCard;
