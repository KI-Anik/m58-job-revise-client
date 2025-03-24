import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';

const MyPostedJob = () => {
    const [jobs,setJobs] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[user.email])

    return (
        <div>
            my posted job {jobs.length}
        </div>
    );
};

export default MyPostedJob;