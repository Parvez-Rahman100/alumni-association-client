import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';


const Contact = () => {
  return (
    <div id='contact' className="hero min-h-screen bg-base-100">
      <div className=" flex justify-between items-center gap-64  flex-wrap">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-green-600">Contact Us</h1>
          <p className="py-4">Always available for work if the right project comes along, Feel free to contact us!</p>

          <div className=' flex  items-center '>
            <InlineIcon className=' mt-4 mx-3' style={{ fontSize: '30px' }} icon="entypo:email" />
            <h4> <span className='text-green-600 font-bold'>tejgaoncollege@ymail.com</span></h4>
          </div>
          <div className=' flex  items-center '>
            <InlineIcon className=' mt-4 mx-3' style={{ fontSize: '30px' }} icon="bxs:phone-call" />
            <h4> <span className='text-green-600 font-bold'>(+88)-1990-6886</span></h4>
          </div>
          <div className='flex lg:justify-start justify-center items-center my-4'>
            <a className=' mx-5 mt-3' target='_blank' rel="noreferrer" href='https://github.com/Parvez-Rahman100'><Icon style={{ fontSize: '40px' }} icon="icon-park:github" /></a>
            <a className=' mx-5 mt-3' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/parvez-miah-945910229/'><Icon style={{ fontSize: '40px' }} icon="logos:linkedin" /></a>
            <a className=' mx-5 mt-3' target='_blank' rel="noreferrer" href='https://www.facebook.com/groups/3128511790748537/'><Icon style={{ fontSize: '40px' }} icon="icon-park:facebook" /></a>
          </div>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Send Message </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;