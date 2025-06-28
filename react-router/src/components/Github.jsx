import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const [data, setData] = useState([]);
    const loaderData = useLoaderData();

    useEffect(() => {
        setData(loaderData);
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data?.followers}
            <img src={data.avatar_url} alt='Github Picture' width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const userData = await fetch('https://api.github.com/users/akash-midha');
    const jsonData = await userData.json();
    return jsonData;
}