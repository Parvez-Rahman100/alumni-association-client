import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    if (resetError) {
        return (
            <div>
                <p>Error: {resetError.message}</p>
            </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }
    return (
        <div className=' py-96 text-center'>
            {/* Forget Password  */}
            <input
                className=' border border-gray-900 rounded-lg py-2 px-8 text-slate-900'
                type="email"
                value={email}
                required
                placeholder='Enter Your Email Address'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button
                className=' my-3 btn btn-primary'
                onClick={async () => {
                    await sendPasswordResetEmail(email);
                    toast.success('Password Reset Link Sent To Your Email')
                }}
            >
                Reset password
            </button>
        </div>
    );
};

export default ResetPassword;