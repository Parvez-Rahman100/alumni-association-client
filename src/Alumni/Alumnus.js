import React, { useState } from 'react';
import Alumni from './Alumni';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import useAlumnus from '../hooks/useAlumnus';

const Alumnus = () => {
  const [alumnus] = useAlumnus();
    const navigate = useNavigate()
    const [searchTitle, setSearchTitle] = useState("")
        const handleViewAllBtn = () =>{
            navigate('/all-alumnus')
        }
    
    return (
        <div className=' aluniBackground container mx-auto'>
           <p className=' text-center text-3xl aluniBackground py-20 font-bold galdenoFont'>Alumnus/Alumnae List</p>
           <input onChange={(e) => setSearchTitle(e.target.value)} className=' block mx-auto w-72 h-12 my-7 border border-zinc-900 rounded-xl' type="text" placeholder="Search..."/>
           <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
                alumnus.slice(0,9)
                .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.alumni_name.toLowerCase().includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                .map(alumni=><Alumni
                key={alumni.id}
                alumni={alumni}
                ></Alumni>)
            }
        </div> 
        <div className=' text-end '>
            <button onClick={()=>handleViewAllBtn()} className=' btn btn-primary my-20 mr-32'>View All <Icon className='text-xl mx-2' icon="akar-icons:arrow-right-thick" /></button>
            </div>
    </div>
    );
};

export default Alumnus;