import React, { useState } from 'react';
import chaire from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero lg:py-32 py-15 ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chaire} className=" lg:max-w-lg  rounded-lg shadow-2xl" alt='chair' />
                <div className='rounded-lg shadow-2xl lg:mr-20'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}


                    ></DayPicker>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;