import React from 'react';

const Contact = () => {
    return (
        <div>
            <div id='contact' className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-green-600">Contact Me</h1>
      <p className="py-4">Always available for work if the right project comes along, Feel free to contact me!</p>
      
      <h4><i style={{fontSize:'30px'}} className="m-2 fa-solid fa-at"></i> <span className='text-green-600 font-bold'>iamparvezrahman@gmail.com</span></h4>
      <h4><i style={{fontSize:'30px'}} className="m-2 fa-solid fa-phone"></i> <span className='text-green-600 font-bold'>+8801686172299</span></h4>
      <div className='flex lg:justify-start justify-center items-center my-4'>
        <a target='_blank' rel="noreferrer" href='https://github.com/Parvez-Rahman100'><i className="mr-4 ficon fa-brands fa-github"></i></a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/parvez-miah-945910229/'><i className="mr-4 ficon fa-brands fa-linkedin"></i></a>
        <a target='_blank' rel="noreferrer" href='https://www.facebook.com/parvez.rahman.144/'><i className="mr-4 ficon fa-brands fa-facebook"></i></a>
        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/i_amparvezrahman/'><i className="mr-4 ficon fa-brands fa-instagram"></i></a>
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