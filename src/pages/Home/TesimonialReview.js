import React from 'react';

const TesimonialReview = ({ review }) => {
    const { name, location } = review;
    return (
        <div className="card w-90 lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur harum tempora, culpa eum earum.</p>
                <div className="flex items-center ">
                    <div className="avatar pr-5 ">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold  text-xl'>{name}</h3>
                        <h5>{location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TesimonialReview;