import React from 'react';
import useAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const {user} = useAuth()
    const navigate = useNavigate()

    const handleSubmit=e=>{
        e.preventDefault()
        const formData  = new FormData(e.target)
        const initialData = Object.fromEntries(formData)
        console.log(initialData)
        const {min,max,currency, ...newjob}= initialData
        newjob.salaryRange = {min,max,currency}
        newjob.requirements = newjob.requirements.split('\n')
        newjob.responsibilities = newjob.responsibilities.split('\n')
        console.log(newjob)

            fetch('http://localhost:3000/jobs',{
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newjob)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: "job added!",
                        icon: "success",
                        draggable: true
                      });
                      navigate('/myPostedJob')
                }
            })
    }
    return (
        <div>
            <h2 className="text-2xl">Post a job</h2>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="fieldset-label">job title</label>
                    <input type="text" name='title' className="input" placeholder="title" />
                    <label className="fieldset-label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Location" />
                    {/* type */}
                    <label className="fieldset-label">job Type</label>
                    <select name='type' defaultValue="Pick a Type" className="select">
                        <option disabled={true}>Pick a Type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                    {/* field */}
                    <label className="fieldset-label">job Field</label>
                    <select name='field' defaultValue="Pick a Field" className="select">
                        <option disabled={true}>Pick a Field</option>
                        <option>Engineering</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                    </select>
                    {/* salary */}
                    <div className=''>
                    <label className="fieldset-label">Salary Range</label>
                    <input type="text" name='min' className="input" placeholder="min" />
                    <input type="text" name='max' className="input m-4" placeholder="max" />
                    <select name='currency' defaultValue="Currency" className="select">
                        <option disabled={true}>Currency</option>
                        <option>Bdt</option>
                        <option>INR</option>
                        <option>Dollar</option>
                    </select>
                    </div>
                    {/* description */}
                    <label className="fieldset-label">Job Description</label>
                    <textarea className="textarea" name='description' placeholder="job description"></textarea>
                    {/* company */}
                    <label className="fieldset-label">Company</label>
                    <input type="text" name='company' className="input" placeholder="company name" />
                      {/* deadline */}
                      <label className="fieldset-label">Deadline</label>
                    <input type="date" name='applicationDeadline' className="input" placeholder="logo url" />
                    {/*requirements */}
                    <label className="fieldset-label">Requirements</label>
                    <textarea className="textarea" name='requirements' placeholder="Put each requirements in a new line"></textarea>
                    {/* logo */}
                    <label className="fieldset-label">Company logo</label>
                    <input type="url" name='company_logo' className="input" placeholder="logo url" />
                    {/*Responsibilities */}
                    <label className="fieldset-label">Responsibilities</label>
                    <textarea className="textarea" name='responsibilities' placeholder="Put each Responsibilities in a new line"></textarea>
                    {/* hr name */}
                    <label className="fieldset-label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />
                    {/* hr email */}
                    <label className="fieldset-label">HR Email</label>
                    <input type="email" defaultValue={user?.email} name='hr_email' className="input" placeholder="HR email" readOnly />
                    {/* submit */}
                    <button className="btn btn-neutral mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;