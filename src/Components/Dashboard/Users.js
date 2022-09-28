import React from 'react';
import useInfo from '../../hooks/useInfo';
import UserRow from './UserRow';


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
                            infos.map((info, index) => <UserRow
                                key={info._id}
                                info={info}
                                index={index}
                            />
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;