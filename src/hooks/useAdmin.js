import { useEffect, useState } from 'react';

const useAdmin = (user) => {

    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

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
                    setAdminLoading(false);
                })

        }
    }, [user])
    return [admin, adminLoading]
};

export default useAdmin;