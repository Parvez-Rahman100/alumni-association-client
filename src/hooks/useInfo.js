import { useEffect, useState } from 'react';

const useInfo = () => {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        const url = 'http://https://alumni-association.herokuapp.com/info';
        fetch(url)
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])
    return [infos]
};

export default useInfo;