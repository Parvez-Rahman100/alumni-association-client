import React from 'react';
import useJobs from '../../hooks/useJobs';
import ReactTooltip from 'react-tooltip';

const AllJobs = () => {

    const [jobs] = useJobs();


    return (
        <div className=' my-12 '>
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
                            <th>Position</th>
                            <th>Description</th>
                            <th>Company</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            jobs?.map((job, index) =>
                                <tr key={job?._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{job?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job?.position}
                                    </td>
                                    <td className="tooltip tooltip-left cursor-pointer tooltip-success" data-tip={job?.description}>{job?.description.slice(0, 30)}<span className=' font-bold'>...Read More </span></td>
                                    <td className='text-justify'>{job?.company}</td>
                                    <th>
                                        <button className="btn mx-3 btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
            <ReactTooltip />
        </div>
    );
};

export default AllJobs;