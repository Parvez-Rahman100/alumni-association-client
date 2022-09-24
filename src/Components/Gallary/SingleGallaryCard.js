import React from 'react';

const SingleGallaryCard = ({ photo }) => {
    const { photoUrl } = photo;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><a href={photoUrl} target='_blank' rel="noreferrer" download><img src={photoUrl} alt="TejgaonCollegeGallary" /></a></figure>
            </div>
        </div>
    );
};

export default SingleGallaryCard;