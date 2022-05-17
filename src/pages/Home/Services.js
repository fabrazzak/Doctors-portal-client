import React from 'react';
import cavity from "../../assets/images/cavity.png"
import fluoride from "../../assets/images/fluoride.png"
import whitening from "../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            img: whitening,
        }
    ]
    return (
        <div className=' text-center py-16'>
            <h3 className='text-2xl text-secondary uppercase font-bold mb-5'>Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16  mt-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;