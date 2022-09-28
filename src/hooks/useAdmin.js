import { useEffect, useState } from 'react';

const useAdmin = (user) => {

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://alumni-association.herokuapp.com/admin/${email}`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data)

                })

        }
    }, [user])
    return [admin]
};

export default useAdmin;