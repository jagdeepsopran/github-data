import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [gitUserData, setGitUserData] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const getGitUser = async () => {
      const res = await fetch(
        `https://api.github.com/users/${username}`
      );                                                
      const response = await res.json();
      console.log("USER IS HERE", response);
      setGitUserData(response);
      return response;
    };
    getGitUser().catch((e) => console.error(e));
  }, []);
  return (
    <div id="main">
      <img
        src={gitUserData.avatar_url}
        className="user-avatar-img"
        alt="user-img"
      />
      <div id="data">
        <span>{gitUserData.login}</span>
        <h2>{gitUserData.name}</h2>
        {/* <h3>{gitUserData.location}</h3> */}
        <span>Followers: {gitUserData.followers}</span>
        <span>Following: {gitUserData.following}</span>
        <a className="view-ongit-a" href={gitUserData.html_url} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
        <h3>{gitUserData.bio}</h3>
      </div>
    </div>
  );
};

export default UserProfile;
