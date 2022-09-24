import { uuidv4 } from '@firebase/util';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DeleteFile from '../Firebase/DeleteFile/DeleteFile';
import UpdateUserRecords from '../Firebase/UpdateUserRecords/UpdateUserRecords';
import UploadFile from '../Firebase/UploadFile/UploadFile';



const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState(user?.displayName);
    const [file, setFile] = useState(null);
    const [photoURL, setPhotoURL] = useState(user?.photoURL)

    // const imgStorageKey = 'bad38deab47996eefced5e1ff3248e47';
    // const { register, formState: { errors }, handleSubmit } = useForm();




    // const [displayName, setDisplayName] = useState('');
    // const [photoURL, setPhotoURL] = useState('');
    // const [updateProfile, profileUpdating, profileError] = useUpdateProfile(auth);

    // if (profileError) {
    //     return (
    //         toast.error('Something Went Wrong')
    //     );
    // }
    // if (profileUpdating) {
    //     return <Loading />
    // }


    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setPhotoURL(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let userObj = { displayName: name };
        let imagesObj = { uName: name };
        try {
            if (file) {
                const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop();
                const url = await UploadFile(
                    file,
                    `profile/${user?.uid}/${imageName}`
                );

                if (user?.photoURL) {
                    const prevImage = user?.photoURL
                        ?.split(`${user?.uid}%2F`)[1]
                        .split('?')[0];
                    if (prevImage) {
                        try {
                            await DeleteFile(`profile/${user?.uid}/${prevImage}`);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }

                userObj = { ...userObj, photoURL: url };
                imagesObj = { ...imagesObj, uPhoto: url };
            }

            await updateProfile(user, userObj);
            await UpdateUserRecords('gallery', user?.uid, imagesObj);

            toast.success('Your profile has been updated');
        } catch (error) {
            toast.success('Your profile has been updated');
            console.log(error);
        }

    };


    // const onSubmit = data => {
    //     const image = data.photo[0];
    //     const formData = new FormData();
    //     formData.append('image', image);
    //     const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;


    //     fetch(url, {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.success) {
    //                 const img = result.data.url;
    //                 const users = {
    //                     name: user.displayName,
    //                     email: user.email,
    //                     img: img,
    //                 }
    //                 fetch('https://alumni-association.herokuapp.com/photos', {
    //                     method: 'POST',
    //                     headers: {
    //                         'content-type': 'application/json'
    //                     },
    //                     body: JSON.stringify(users)
    //                 })
    //                     .then(res => res.json())
    //                     .then(inserted => {
    //                         console.log('inserted', inserted);
    //                         if (success) {
    //                             toast.success('Photo Successfully Uploaded')
    //                         }
    //                         else {
    //                             toast.error('Failed to upload your photo')
    //                         }
    //                     })
    //             }
    //         })

    // };
    return (
        <div className=' my-12'>
            {/* <div className=' mt-10'>
                <input
                    className=' border border-black py-2 rounded-lg px-7'
                    placeholder='Update Your Name'
                    type="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                />
                <br />
                <br />
                <input
                    className=' border border-black py-2 rounded-lg px-7'
                    placeholder='Put your photo url'
                    type="photoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                />
                <br />
                <button
                    className=' btn btn-outline my-4'
                    onClick={async () => {
                        await updateProfile({ displayName });
                        toast.success('Updated Name');
                    }}
                >
                    Update Profile
                </button>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Upload Your Image</span>
                        </label>
                        <input className="input input-bordered text-black w-full max-w-xs" placeholder="Your Reg Number" type="file" {...register("photo", {
                            required: {
                                value: true,
                                message: 'Photo must be Required'
                            },
                            validate: {
                                lessThan10MB: (files) => files[0]?.size < 10000000 || "Max 10MB",
                                acceptedFormats: (files) =>
                                    ["image/jpeg", "image/png", "image/gif"].includes(files[0]?.type) ||
                                    "Only PNG, JPEG e GIF",
                            },

                        })} />
                        <label className="label">
                            {errors.photo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photo.message}</span>}
                        </label>
                    </div>
                    <input className=' btn btn-outline' type="submit" />
                </form>
            </div> */}

            <form onSubmit={handleSubmit}>
                <div>
                    <p>
                        You can update your profile by updating these fields:
                    </p>
                    <label className=' my-5' htmlFor='profileName'> Update Profile Name</label>
                    <br />
                    <input
                        className=' px-3 my-10 border text-black border-black rounded-lg'
                        autoFocus
                        margin="normal"
                        id="profileName"
                        type="text"
                        inputProps={{ minLength: 2 }}
                        fullWidth
                        variant="standard"
                        value={name || ''}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="profilePhoto">
                        <input
                            accept="image/*"
                            id="profilePhoto"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleChange}
                        />
                        <img
                            style={{ width: '200px', height: '200px' }}
                            className=' rounded-full cursor-pointer'
                            alt='avater'
                            src={photoURL}

                        />
                    </label>
                    <p className=' font-bold my-4'>Click or press on the pic to change your profile pic.</p>
                </div>
                <div className=' my-5'>
                    <button variant="contained" className=' btn btn-outline' type="submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
};

export default UpdateProfile;