import { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = 'http://https://alumni-association.herokuapp.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return [users]
};

export default useUsers;