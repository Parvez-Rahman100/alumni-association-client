import React from 'react';
import Alumni from './Alumni';
import url from "../alumni.json"
const Alumnus = () => {

    return (
        <div className=' aluniBackground  '>
           <p className=' text-center text-3xl font-bold galdenoFont'>Alumnus/Alumnae List</p>
           <input className=' block mx-auto w-72 h-12 my-7' type="text" placeholder="Search..."/>
           <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                url.slice().reverse().map(alumni=><Alumni
                key={alumni.id}
                alumni={alumni}
                ></Alumni>)
            }
        </div> 
    </div>
    );
};

export default Alumnus;