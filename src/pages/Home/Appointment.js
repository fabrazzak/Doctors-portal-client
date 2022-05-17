import React from 'react';
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Sheared/PrimaryButton';

const Appointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className="my-20">
            <div className='flex justify-center items-center'>
                <div className='flex-1 hidden sm:block'>
                    <img className='mt-[-200px]' src={doctor} alt="doctor" />
                </div>
                <div className='flex-1 text-white py-16 px-5 '>
                    <h4 className='text-secondary text-2xl'>Appointment</h4>
                    <h2 className='text-4xl py-5'>Make an appointment Today</h2>
                    <p className='pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem I psumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                
            </div>
            
        </section>
    );
};

export default Appointment;