import React from 'react';
import Alumni from './Alumni';
import url from "../alumni.json"
import { useNavigate } from 'react-router-dom';

const Alumnus = () => {
    const navigate = useNavigate()
        const handleViewAllBtn = () =>{
            navigate('/all-alumnus')
        }
    
    return (
        <div className=' aluniBackground  '>
           <p className=' text-center text-3xl font-bold galdenoFont'>Alumnus/Alumnae List</p>
           <input className=' block mx-auto w-72 h-12 my-7 border border-zinc-900 rounded-xl' type="text" placeholder="Search..."/>
           <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                url.slice(0,12).map(alumni=><Alumni
                key={alumni.id}
                alumni={alumni}
                ></Alumni>)
            }
            <button onClick={()=>handleViewAllBtn()} className=' btn btn-primary '>View All</button>
        </div> 
    </div>
    );
};

export default Alumnus;