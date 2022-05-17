import React from 'react';

const Service = ({ service }) => {
    const { img, name } = service;
    return (
        <div className="card card-compact lg:w-lg sm:mb-10  bg-base-100 lg:py-10 px-5 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title ">{name}</h2>
                <p className='text-left'>If a dog chews shoes whose shoes does he choose?Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>

            </div>
        </div>
    );
};

export default Service;