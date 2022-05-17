import React from 'react';
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Sheared/PrimaryButton';

const ContactHome = () => {
    return (
        <section className='lg:py-25 py-10' style={{ background: `url(${appointment})center no-repeat` }} >
            <div className='text-center' >
                <h3 className="text-secondary font-bold text-2xl">Contact Us</h3>
                <h2 className='text-4xl text-white'>Stay Connected with us</h2>
            </div>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 lg:w-[500px] sm:w-[400px]  ">
                        <div className="card-body">
                            <div className="form-control pb-3">
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-3">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-3">
                                <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-control mt-6">

                                <button className="btn btn-primary w-40 mx-auto text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary ">Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHome;