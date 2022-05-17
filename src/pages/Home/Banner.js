import React from 'react';
import homeBanner from '../../assets/images/chair.png'
import appointment from '../../assets/images/bg.png'
import PrimaryButton from '../Sheared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen  " style={{ background: `url(${appointment})center`,}} >
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={homeBanner} className="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
                    <p className="py-6 lg:pr-10 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton> Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;