import React from 'react';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, company_logo, hr_name, status, responsibilities, requirements, company,
        description, salaryRange, applicationDeadline, category, location, title
    } = job
    return (
        <div className="card bg-base-100 shadow-sm m-2">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className=''>
                    <h2 className='text-2xl'>{company}</h2>
                    <p className='flex gap-1 items-center'>
                        <LiaMapMarkerAltSolid />
                        {location}
                    </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions">
                    <div className="">
                        {
                            requirements.map((req, idx) => <p key={idx} className='badge badge-ghost hover:text-blue-500 cursor-pointer p-3 m-1'>{req}</p>)
                        }
                    </div>
                </div>

                <div className='flex items-center'>
                    <p className='font-semibold'>Salary: {salaryRange.min}- {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;