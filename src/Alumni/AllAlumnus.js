import React, { useState } from 'react';
import Loading from '../Components/Shared/Loading';
import useAlumnus from '../hooks/useAlumnus';
import Alumni from './Alumni';

const AllAlumnus = () => {
  const [alumnus] = useAlumnus();
  const [searchTitle, setSearchTitle] = useState("")

  return (
    <>
      <div className=' aluniBackground  container mx-auto'>
        <p className=' text-center aluniBackground py-20 text-3xl font-bold galdenoFont'>Alumnus/Alumnae List</p>
        <input onChange={(e) => setSearchTitle(e.target.value)} className=' block mx-auto w-72 h-12 my-7 border border-zinc-900 rounded-xl' type="text" placeholder="Search..." />
        {alumnus?.length ? (<div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
          {
            alumnus
              .filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.alumni_name.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .map(alumni => <Alumni
                key={alumni.id}
                alumni={alumni}
              ></Alumni>)
          }

        </div>) : (<Loading />)}
      </div>
    </>
  );
};

export default AllAlumnus;