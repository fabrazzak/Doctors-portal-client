import React from 'react';
import quote from "../../assets/icons/quote.svg"
import TesimonialReview from './TesimonialReview';
const Textimonial = () => {
    const reviews=[
        {
            _id:1,
            name:"Winson Herry",
            location:"California",
            review:"",
        },
        {
            _id:2,
            name:"Muchual strack",
            location:"United State",
            review:"",
        },
        {
            _id:3,
            name:"Henrry sonil",
            location:"California",
            review:"",
        },
    ]
    return (
        <section className='lg:my-32 my-10'>
            <div className='flex justify-between '>
                <div className='mx-5'>
                    <h4 className="text-2xl font-bold text-secondary">Testimonial</h4>
                    <h2 className='lg:text-4xl text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className="lg:w-48 w-24 " alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    reviews.map(review => <TesimonialReview key={review._id} review={review}></TesimonialReview>)
                }
            </div>

            
        </section>
    );
};

export default Textimonial;