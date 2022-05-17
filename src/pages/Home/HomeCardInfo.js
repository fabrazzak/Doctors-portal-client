import React from 'react';

const HomeCardInfo = ({ img, cardTitle, cardInfo, bgColor }) => {
    return (
        <div className={`card lg:card-side  bg-info shadow-xl py-8 text-white pl-6 ${bgColor}`}>
            <figure>
                <img  src={img} alt="Album" />

            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}!</h2>
                <p>{cardInfo}.</p>

            </div>
        </div>
    );
};

export default HomeCardInfo;