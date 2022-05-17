import React from 'react';

const Services = ({ service, setTretment }) => {
    const { _id, name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:py-10">
            <div className="card-body text-center">
                <h2 className=" text-2xl text-secondary font-bold">{name}</h2>
                {
                    slots.length ? <small className='font-bold'>{slots[0]}</small> : <small className='font-bold text-red-600'>Try another day</small>
                }

                <small className='font-bold'>{slots.length} {slots.length > 1 ? 'SPACES' : "SPACE"} AVAILABLE</small>
                <div className="card-actions justify-center mt-4">
                    <label htmlFor="booking-modal"
                        onClick={() => setTretment(service)}
                        className="btn modal-button btn-primary"
                        disabled={slots.length === 0}>Booking Appointment</label>

                </div>
            </div>
        </div >
    );
};

export default Services;