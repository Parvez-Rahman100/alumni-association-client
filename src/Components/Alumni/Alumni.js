import React from 'react';
import { Link } from 'react-router-dom';

const Alumni = ({ alumni }) => {

    const { alumni_name, batch, session, _id, img } = alumni;

    return (
        <div>
            <div className="card max-w-lg formBG shadow-xl rounded-xl">
                <div className="card-body text-black">
                    <div className='flex justify-around items-center '>
                        <img className=' w-1/3 mr-2 rounded-full' src={img} alt='alumni pic' />
                        <h2 className="card-title"> {alumni_name}</h2>
                    </div>
                    <p className=' ml-8 mt-4 font-bold'>Batch : {batch}</p>
                    <p className=' ml-8  font-bold'>Session : {session}</p>

                </div>
                <div className="card-actions justify-end">
                    <Link to={`/alumni/${_id}`} className="btn btn-outline w-10/12 mx-auto mb-4 text-black">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Alumni;