import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';



const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div className=' flex justify-center items-center'>
            <div className="card mt-10 card-compact w-96 bg-base-100 shadow-xl">
                <figure key={user.uid}><img src={user?.photoURL} alt='userPhoto' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Hi I am {user?.displayName}</h2>
                    <h2 className=' text-primary'>{user?.email}</h2>
                    <p>User Id :{user?.uid}</p>
                    <div className="card-actions justify-end">
                        <Link to='/dashboard/update-profile' className=' btn btn-primary my-3'>Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;