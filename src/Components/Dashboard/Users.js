import React from 'react';
import useInfo from '../../hooks/useInfo';


const Users = () => {

    const [infos] = useInfo();

    return (
        <div className=' my-12'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Serial No
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Registration</th>
                            <th>Batch</th>
                            <th>Session</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            infos.map((info, index) =>
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
                                        <button className="btn mx-3 btn-success btn-xs" >Make Admin</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;