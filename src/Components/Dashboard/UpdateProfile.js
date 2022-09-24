import { success } from 'daisyui/src/colors';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const imgStorageKey = 'bad38deab47996eefced5e1ff3248e47';
    const { register, formState: { errors }, handleSubmit } = useForm();
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
                            }

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