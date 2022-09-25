import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import Job from './job';
import useJobs from '../../hooks/useJobs';


const Jobs = () => {
    const { register, handleSubmit } = useForm();
    const [jobs] = useJobs();


    const onSubmit = async data => {

        try {
            const url = 'https://alumni-association.herokuapp.com/jobs';
            const result = await axios.post(url, data);
            if (result?.data === false) {
                toast.error('Something Went Wrong')
                return;

            } else {
                toast.success('Successfully Job added')
            }

        } catch (error) {
            console.log(error);

        }
    };
    return (
        <>
            <div className='  container mx-auto'>
                <p className=' text-center text-black text-3xl aluniBackground py-20 font-bold galdenoFont'>Jobs List</p>
                <div className=' text-center my-3'>

                    <label htmlFor="my-modal-6" className="btn btn-outline modal-button">Post a job opportunity</label>


                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box ">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white">Your Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your Name"
                                        className="input input-bordered text-black w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white">Position</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Job Position"
                                        className="input input-bordered text-black w-full max-w-xs"
                                        {...register("position", {
                                            required: {
                                                value: true,
                                                message: 'Position is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white">Company Name</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Company Name"
                                        className="input input-bordered text-black w-full max-w-xs"
                                        {...register("company", {
                                            required: {
                                                value: true,
                                                message: 'Company Name is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-white">Description</span>
                                    </label>
                                    <textarea
                                        required
                                        type="text"
                                        placeholder="Job Description"
                                        className="input input-bordered text-black w-full max-w-xs"
                                        {...register("description", {
                                            required: {
                                                value: true,
                                                message: 'Description is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn btn-error">Cancel</label>
                                    <input className=' btn btn-success' type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {jobs?.length ? (
                    <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
                        {
                            jobs.map(job => <Job
                                key={job._id}
                                job={job}
                            ></Job>)
                        }
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </>

    );
};

export default Jobs;