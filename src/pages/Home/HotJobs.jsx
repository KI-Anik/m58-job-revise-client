import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        axios('http://localhost:3000/jobs')
        .then(data=>{
           setJobs(data.data)
        })
    },[])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                jobs.map(job=>
                <HotJobCard
                job={job}
                key={job._id}>

                </HotJobCard>)
            }
        </div>
    );
};

export default HotJobs;