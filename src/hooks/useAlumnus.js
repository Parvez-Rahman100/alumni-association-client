import { useEffect, useState } from 'react';

const useAlumnus = () => {
    const [alumnus,setAlumnus] = useState([]);

    useEffect(()=>{
        const url = 'https://alumni-association.herokuapp.com/alumnus';
        fetch(url)
        .then(res => res.json())
        .then(data => setAlumnus(data))
    },[])
    return [alumnus];
};

export default useAlumnus;