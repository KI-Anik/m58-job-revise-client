import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company, applicationDeadline } = useLoaderData()
    return (
        <div className='m-10'>
            <p className='text-2xl'>job details for {title}</p>
            <p>Apply for : {company}</p>
            <p>Deadline: {applicationDeadline}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;