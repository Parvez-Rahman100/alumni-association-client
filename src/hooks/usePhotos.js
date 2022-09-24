import { useEffect, useState } from 'react';

const usePhotos = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const url = 'https://alumni-association.herokuapp.com/photos';
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data))

    }, [])

    return [photos];
};

export default usePhotos;