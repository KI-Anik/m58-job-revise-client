import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const navigate = useNavigate()

    // console.log('user', user)

    const handleSubmit=e=>{
        e.preventDefault()
        const form = e.target;
        const linkedIn=form.linkedIn.value;
        const github=form.github.value;
        const resume=form.resume.value;
        
        // console.log(linkedIn,github,resume)

        const jobApplication={
            job_id: id,
            applicant_email: user?.email,
            linkedIn,
            github,
            resume
        }

        // axios.post('http://localhost:3000/job-applicants',)

        // .then(res=>{
        //     console.log(res.data)
        // })

        fetch('http://localhost:3000/job-applicants',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplication')
            }
        })

    }

    return (
          <div className="card bg-base-100 m-10 text-center shadow-2xl">
          <h1 className="text-5xl font-bold ">Apply here!</h1>

            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">LikendIn Link</label>
                <input type="url" name='linkedIn' className="input" placeholder="LinkedIN url" />
                <label className="fieldset-label">Github link</label>
                <input type="url" name='github' className="input" placeholder="github url" />
                <label className="fieldset-label">Resume link</label>
                <input type="url" name='resume' className="input" placeholder="Resume url" />
                <button className="btn btn-neutral mt-4">Apply</button>
              </fieldset>
            </form>
          </div>
    );
};

export default JobApply;