import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { title, company, applicationDeadline } = useLoaderData()
    return (
        <div className='m-10'>
            <p className='text-2xl'>job details for {title}</p>
            <p>Apply for : {company}</p>
            <p>Deadline: {applicationDeadline}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;