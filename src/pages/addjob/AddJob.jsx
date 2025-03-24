import React from 'react';

const AddJob = () => {

    const handleSubmit=e=>{
        e.preventDefault()
        const formData  = new FormData(e.target)
        const initialData = Object.fromEntries(formData)
        console.log(initialData)
        const {min,max,currency, ...newjob}= initialData
        console.log(newjob)
        newjob.salaryRange = {min,max,currency}
        console.log(newjob)

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
                    <select name='type' defaultValue="Pick a color" className="select">
                        <option disabled={true}>Pick a Type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                    {/* field */}
                    <label className="fieldset-label">job Field</label>
                    <select name='field' defaultValue="Pick a color" className="select">
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
                    <select name='currency' defaultValue="Pick a color" className="select">
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
                    {/*requirements */}
                    <label className="fieldset-label">Requirements</label>
                    <textarea className="textarea" name='requirement' placeholder="Put each requirements in a new line"></textarea>
                    {/*Responsibilities */}
                    <label className="fieldset-label">Responsibilities</label>
                    <textarea className="textarea" name='responsibilities' placeholder="Put each Responsibilities in a new line"></textarea>
                    {/* submit */}
                    <button className="btn btn-neutral mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;