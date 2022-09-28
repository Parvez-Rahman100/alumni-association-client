import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ info, index }) => {
    const { email } = info;


    const makeAdmin = () => {
        const url = `https://alumni-association.herokuapp.com/users/admin/${email}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully Made An Admin')
            })
    }

    return (
        <tr key={info._id}>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{info.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {info.email}
            </td>
            <td>{info.regNumber}</td>
            <td>{info.batch}</td>
            <td>{info.session}</td>
            <th>
                <button className="btn mx-3 btn-error btn-xs">Delete</button>
                <button onClick={makeAdmin} className="btn mx-3 btn-success btn-xs" >Make Admin</button>
            </th>
        </tr>
    );
};

export default UserRow;