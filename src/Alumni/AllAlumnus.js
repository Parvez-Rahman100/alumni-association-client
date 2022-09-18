import React from 'react';
import url from "../alumni.json"
import Alumni from './Alumni';

const AllAlumnus = () => {
    return (
        <div className=' aluniBackground  '>
           <p className=' text-center aluniBackground py-20 text-3xl font-bold galdenoFont'>Alumnus/Alumnae List</p>
           <input className=' block mx-auto w-72 h-12 my-7 border border-zinc-900 rounded-xl' type="text" placeholder="Search..."/>
           <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                url.map(alumni=><Alumni
                key={alumni.id}
                alumni={alumni}
                ></Alumni>)
            }
            
        </div> 
    </div>
    );
};

export default AllAlumnus;