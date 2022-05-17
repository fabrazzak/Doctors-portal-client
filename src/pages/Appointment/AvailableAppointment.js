import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Services from './Services';
import Modal from './Modal';

const AvailableAppointment = ({date,setDate}) => {
    const [services,setServices]=useState([]);
    const [treatment,setTretment]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:5000/service")
        .then(res =>res.json())
        .then(data=> setServices(data))
    },[])
    console.log(services)   
    
    return (
        <div className='py-10'>
            <h1 className='text-secondary text-center font-bold text-2xl '>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service =><Services key={service._id} service={service} setTretment={setTretment}></Services>)}
                {
                    treatment && <Modal treatment={treatment} date={date}></Modal>
                }

            </div>
            
        </div>
    );
};

export default AvailableAppointment;