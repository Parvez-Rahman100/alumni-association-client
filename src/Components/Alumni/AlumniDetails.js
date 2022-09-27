import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const AlumniDetails = () => {

    const { alumniId } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        const url = `https://alumni-association.herokuapp.com/alumnus/${alumniId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [alumniId]);

    return (
        <div className=' justify-center items-center flex container aluniBackground my-80 rounded-full mx-auto'>
            <div className=' '>
                <div className="card-body text-black">
                    <div className='flex justify-between items-center '>
                        <h2 className="card-title"> {details.alumni_name}</h2>
                    </div>
                    <h6>Registration Number : {details.alumni_registration_number}</h6>
                    <p>Batch : {details.batch}</p>
                    <p>Session : {details.session}</p>
                </div>
            </div>
        </div>
    );
};

export default AlumniDetails;