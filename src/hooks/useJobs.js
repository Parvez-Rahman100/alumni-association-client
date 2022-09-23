import { useEffect } from 'react';
import { useState } from 'react';


const useJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const url = 'https://alumni-association.herokuapp.com/jobs';
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return [jobs];
};

export default useJobs;