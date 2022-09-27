import React from 'react';
import { Link } from 'react-router-dom';

const Alumni = ({ alumni }) => {
    const { alumni_name, alumni_registration_number, batch, session, _id } = alumni;

    return (
        <div>
            <div className="card max-w-lg  p-8 bg-cyan-100 shadow-xl rounded-xl">
                <div className="card-body text-black">
                    <div className='flex justify-between items-center '>
                        <h2 className="card-title"> {alumni_name}</h2>
                    </div>
                    <h6>Registration Number : {alumni_registration_number}</h6>
                    <p>Batch : {batch}</p>
                    <p>Session : {session}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/alumni/${_id}`} className="btn btn-outline text-black">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Alumni;