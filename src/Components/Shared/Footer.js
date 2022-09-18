import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div style={{backgroundColor:'rgba(203, 203, 203, 1)'}} className='flex justify-between items-center'>
            <div>
                <p className=' text-center tracking-widest text-xl font-semibold'>Alumni Association</p>
                <div className='flex lg:justify-start justify-center items-center my-4'>
                <a target='_blank' rel="noreferrer" href='https://github.com/Parvez-Rahman100'><Icon className=' mx-7 w-10  h-6 ' icon="fa:github" /></a>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/parvez-miah-945910229/'><Icon className=' mx-7 w-10  h-6' icon="line-md:linkedin" /></a>
                <a target='_blank' rel="noreferrer" href='https://www.facebook.com/parvez.rahman.144/'><Icon className=' mx-7 w-10  h-6' icon="akar-icons:facebook-fill" /></a>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/i_amparvezrahman/'><Icon className=' mx-7 w-10  h-6' icon="akar-icons:instagram-fill" /></a>
            </div>
            </div>
            <div>
                <p> &copy; Copyright 2022-2023, Alumni Association , All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;