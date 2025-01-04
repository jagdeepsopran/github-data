import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Repo = () => {
  const { full_name } = useParams();
  let [detail, setDetail] = useState({});

  useEffect(() => {

    const details = async () => {
      const res = await fetch(`https://api.github.com/users/${full_name}`)
      const data = await res.json();
      console.log(data);

      setDetail(data);
      // console.log(detail);

    };

    details();

  }, [])


  return (
    <>
        <img src={detail.avatar_url} alt="" />
        <h1>{detail.followers}</h1>
        <h1>{detail.following}</h1>
    </>
  )
}

export default Repo