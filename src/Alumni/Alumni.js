import React from 'react';

const Alumni = ({alumni}) => {
    const {alumni_name,alumni_registration_number} = alumni;

    return (
        <div>
            <div className="card max-w-lg bg-base-100 p-8 shadow-xl rounded-xl">
            <div className="card-body">
             <div className='flex justify-between items-center '>
             <h2 className="card-title"> {alumni_name}</h2>
            </div>
            <h6>Registration Number : {alumni_registration_number}</h6>
            </div>
        </div>
            </div>
    );
};

export default Alumni;