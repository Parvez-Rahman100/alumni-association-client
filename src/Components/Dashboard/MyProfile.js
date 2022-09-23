import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            {user?.email ? (
                <div className=' flex justify-center items-center'>
                    <div className="card  card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={user?.photoURL} alt='userPhoto' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Hi I am {user?.displayName}</h2>
                            <h2 className=' text-primary'>{user?.email}</h2>
                            <p>User Id :{user?.uid}</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>


                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default MyProfile;