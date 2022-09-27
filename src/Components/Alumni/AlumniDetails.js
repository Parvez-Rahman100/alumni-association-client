import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const AlumniDetails = () => {

    const { alumniId } = useParams()
    const [details, setDetails] = useState({})
    console.log(details);

    useEffect(() => {
        const url = `https://alumni-association.herokuapp.com/alumnus/${alumniId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [alumniId]);

    return (
        <div className='flex justify-center items-center py-60'>
            <div className="card max-w-lg  formBG shadow-xl rounded-xl">
                <div className="card-body text-black">
                    <div className='flex justify-around items-center '>
                        <img className=' w-1/3 mr-2' src={details.img} alt='alumni pic' />
                        <h2 className="card-title text-2xl"> {details.alumni_name}</h2>

                    </div>
                    <h2 className=' ml-8 mt-4 font-bold'>Registration Number : {details.alumni_registration_number}</h2>
                    <p className=' ml-8 mt-4 font-semibold'>Batch : {details.batch}</p>
                    <p className=' ml-8  font-semibold'>Session : {details.session}</p>
                    <p className=' ml-8 mt-4 font-semibold'>Email : {details.email}</p>
                    <p className=' ml-8 mt-4 font-semibold'>Currently Working At : {details.connected}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to='/alumnus' className="btn btn-outline w-10/12 mx-auto mb-4 text-black">Back to Alumnus</Link>
                </div>
            </div>
        </div>
    );
};

export default AlumniDetails;