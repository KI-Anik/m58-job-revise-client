import React from 'react';
import { useParams } from 'react-router-dom';

const JobApply = () => {
    const {id} = useParams()
    console.log(id)

    const handleSubmit=e=>{
        e.preventDefault()
        const form = e.target;
        const linkedIn=form.linkedIn.value;
        const github=form.github.value;
        const resume=form.resume.value;
        
        console.log(linkedIn,github,resume)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Apply here!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
        </div>
      </div>
    );
};

export default JobApply;