import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loading from "./loading/Loading";  

const Home = () => {
  //State management
  const [repos, setRepos] = useState(null);
  const gitRepos = async () => {
    const res = await fetch(
      "https://api.github.com/search/repositories?q=XXX"
    );
    const response = await res.json();
    // console.log("data", response);
    setRepos(response.items);
    return response;
  };

  useEffect(() => {
    gitRepos().catch((e) => console.error(e));
  }, []);
  return (
    <div className="users-cont">
      {repos ? (
        repos.map((repo, idx) => <UserCard key={idx} repo={repo} />)
      ) : 
        <Loading/>
      }
    </div>
  );
};

export default Home;
