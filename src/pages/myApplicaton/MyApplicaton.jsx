import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';

const MyApplicaton = () => {
    const { user } = useAuth()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        // fetch(`http://localhost:3000/job-application?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setJobs(data)
        //     })

        axios.get(`http://localhost:3000/job-application?email=${user?.email}`,{
            withCredentials: true
        })
        .then(res=>{
            setJobs(res.data)
        })
    }, [user?.email])

    console.log(jobs)

    return (
        <div>
            <h3 className='text-2xl' >job application: {jobs.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job =>
                                <tr key={job._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="company_logo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.company}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{job.title}</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplicaton;