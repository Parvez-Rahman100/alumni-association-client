import { success } from 'daisyui/src/colors';
import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const imgStorageKey = 'bad38deab47996eefced5e1ff3248e47';
    const { register, formState: { errors }, handleSubmit } = useForm();



    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    if (error) {
        return (
            toast.error('Something Went Wrong')
        );
    }
    if (updating) {
        return <Loading />
    }

    const onSubmit = data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;


        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const users = {
                        name: user.displayName,
                        email: user.email,
                        img: img,
                    }
                    fetch('https://alumni-association.herokuapp.com/photos', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(users)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('inserted', inserted);
                            if (success) {
                                toast.success('Photo Successfully Uploaded')
                            }
                            else {
                                toast.error('Failed to upload your photo')
                            }
                        })
                }
            })

    };
    return (
        <div>
            <div className=' mt-10'>
                <input
                    className=' border border-black py-2 rounded-lg px-7'
                    placeholder='Update Your Name'
                    type="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                />
                <br />
                <button
                    className=' btn btn-primary my-4'
                    onClick={async () => {
                        await updateProfile({ displayName });
                        toast.success('Updated Name');
                    }}
                >
                    Update Name
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
                    <input className=' btn btn-primary' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;