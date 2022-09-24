import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import usePhotos from '../../hooks/usePhotos';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const [photos] = usePhotos();
    return (
        <>
            {user?.email ? (
                <div className=' flex justify-between items-center'>

                    <div className=' flex justify-center items-center'>
                        {
                            photos.map(photo => <div key={photo._id}>
                                <div className="card mt-10 card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={photo?.img} alt='userPhoto' /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Hi I am {user?.displayName}</h2>
                                        <h2 className=' text-primary'>{user?.email}</h2>
                                        <p>User Id :{user?.uid}</p>
                                        <div className="card-actions justify-end">
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default MyProfile;