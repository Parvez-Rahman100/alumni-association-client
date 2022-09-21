import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useJobs from '../../hooks/useJobs';
import Job from './job';


const Jobs = () => {
    const { register, handleSubmit } = useForm();
    const [jobs] = useJobs();
    

  const onSubmit = async data => {

    try {
        const url = 'http://localhost:5000/jobs';
        const result = await axios.post(url,data);
        if(result?.data === false){
         alert('Something Went Wrong')
         return;
         
        }else{
         
         
        }
       
 } catch (error) {
        console.log(error);
     
    }    
};
    return (
        <div className=' aluniBackground container mx-auto'>
             <p className=' text-center text-3xl aluniBackground py-20 font-bold galdenoFont'>Jobs List</p>
             <div className=' text-center my-3'>
             
            <label htmlFor="my-modal-6" className="btn modal-button">Post a job opportunity</label>

            
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
                <label htmlFor="my-modal-6" className="btn btn-error">Cancle</label>
                <input className=' btn btn-success' type="submit" />
    </div>
    </form>
  </div>
</div>
             </div>
             <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
             {
                jobs.map(job=><Job
                key={job._id}
                job={job}
                ></Job>)
            }                 
            </div>
        </div>
    );
};

export default Jobs;