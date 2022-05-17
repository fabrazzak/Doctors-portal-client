import React from 'react';
import HomeCardInfo from './HomeCardInfo';
import clock from "../../assets/icons/clock.svg"
import phone from "../../assets/icons/phone.svg"
import marker from "../../assets/icons/marker.svg"

const HomeCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-8'>
            <HomeCardInfo
                cardTitle='Opening Hours'
                cardInfo='Lorem Ipsum is simply dummy text of the pri'
                bgColor='bg-gradient-to-r from-secondary to-primary'
                img={clock}
            ></HomeCardInfo>

            <HomeCardInfo
                cardTitle='Visit our location'
                cardInfo='Brooklyn, NY 10036, United States'
                bgColor='bg-info'
                img={marker}
            ></HomeCardInfo>
            <HomeCardInfo
                cardTitle='Contact us now'
                cardInfo='+000 123 456789'
                bgColor='bg-gradient-to-r from-secondary to-primary'
                img={phone}
            ></HomeCardInfo>
        </div>
    );
};

export default HomeCard;