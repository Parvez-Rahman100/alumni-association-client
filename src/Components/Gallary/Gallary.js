import React from 'react';
import usePhotos from '../../hooks/usePhotos';
import Loading from '../Shared/Loading';
import SingleGallaryCard from './SingleGallaryCard';

const Gallary = () => {
    const [photos] = usePhotos();
    return (
        <div className=' py-20 container mx-auto'>
            <h1 className=' py-14 text-center galadaFonts text-3xl my-4 aluniBackground'>Welcome to Tejgaon College Gallery</h1>
            {photos?.length ? (
                <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-12'>
                    {
                        photos.map(photo => <SingleGallaryCard
                            key={photo._id}
                            photo={photo}
                        ></SingleGallaryCard>)
                    }
                </div>
            ) : (<Loading />)}
        </div>
    );
};

export default Gallary;