import React from 'react';

const Job = ({ job }) => {
    const { description, position, company, name } = job;
    return (
        <div className=' my-10'>
            <div className="card max-w-lg  p-8 bg-accent shadow-xl rounded-xl">
                <div className="card-body">
                    <div className='flex justify-between items-center '>
                        <h2 className="card-title"> {position} : {company}</h2>
                    </div>
                    <h6>Job Description : {description}</h6>
                    <p>Posted By : {name}</p>
                </div>
            </div>
        </div>
    );
};

export default Job;