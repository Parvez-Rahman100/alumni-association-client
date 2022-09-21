import { useEffect, useState } from 'react';

const useJobs = () => {

    const [jobs,setJobs] = useState([]);
    console.log(jobs);
    useEffect(()=>{
        const url = 'http://localhost:5000/jobs';
        fetch(url)
        .then(res =>res.json())
        .then(data => setJobs(data))
    },[])
    return [jobs]
};

export default useJobs;