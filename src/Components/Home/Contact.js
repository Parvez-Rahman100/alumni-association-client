import React from 'react';
import { Icon } from '@iconify/react';


const Contact = () => {
    return (
        <div className=' my-10'>
            <div id='contact' className="hero min-h-screen bg-base-100">
    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-green-600">Contact Us</h1>
      <p className="py-4">Always available for work if the right project comes along, Feel free to contact us!</p>
      
      <h4><Icon icon="ic:baseline-alternate-email" /><p className='text-green-600 font-bold'>iamparvezrahman@gmail.com</p></h4>
      <h4><Icon icon="bxs:phone-call" /> <span className='text-green-600 font-bold'>+8801686172299</span></h4>
      <h4><Icon icon="akar-icons:location" /><span className='text-green-600 font-bold'>16 Indira Road, Dhaka-1215</span></h4>
      <div className='flex lg:justify-start justify-center items-center my-4'>
        <a target='_blank' rel="noreferrer" href='https://github.com/Parvez-Rahman100'><Icon className=' mx-7 w-10  h-6 mt-5' icon="fa:github" /></a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/parvez-miah-945910229/'><Icon className=' mx-7 w-10  h-6 mt-5' icon="line-md:linkedin" /></a>
        <a target='_blank' rel="noreferrer" href='https://www.facebook.com/groups/3128511790748537'><Icon className=' mx-7 w-10  h-6 mt-5' icon="akar-icons:facebook-fill" /></a>
        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/i_amparvezrahman/'><Icon className=' mx-7 w-10  h-6 mt-5' icon="akar-icons:instagram-fill" /></a>
      </div>
    </div>
    
    <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl mx-52 bg-base-100 text-center">
      <div className="card-body">
      <form action="https://formsubmit.co/iamparvezrahman@gmail.com" method='POST'>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea type="text" name='message' placeholder="Your Message" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="text" name='email' placeholder="Email" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Send Message </button>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;