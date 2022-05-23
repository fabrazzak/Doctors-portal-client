import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Services from './Services';
import Modal from './Modal';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading';

const AvailableAppointment = ({date,setDate}) => {
    const [treatment,setTreatment]=useState(null)
    const dateFormate = format(date, 'PP');
    const { data: services, error, isLoading, refetch } = useQuery(['available',dateFormate],()=>fetch(`http://localhost:5000/available?date=${dateFormate}`).then(res =>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
 
    
    return (
        <div className='py-10'>
            <h1 className='text-secondary text-center font-bold text-2xl '>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services?.map(service =><Services key={service._id} service={service} setTreatment={setTreatment}></Services>)}
                {
                    treatment && <Modal refetch={refetch} setTreatment={setTreatment} treatment={treatment} date={date}></Modal>
                }

            </div>
            
        </div>
    );
};

export default AvailableAppointment;