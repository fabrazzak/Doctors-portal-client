import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../src/firebase.init';
import Loading from '../Sheared/Loading';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    
    const [service, setService] = useState([]);
    const navigate=useNavigate();
   
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user?.email}` ,{
                method:"GET",
                headers:{"authorization": `Bearer ${localStorage.getItem("accessToken")}`}
            })
                .then(res => {
                    if(res.status === 401 || res.status === 403){
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                    }
                    return res.json()})
                .then(data => {
                    setService(data)});
        }
    }, [user])
    return (
        <div className='bg-dark- ' >
            <h1 className='text-2xl ml-6 mt-6 font-bold'>My appointment {service.length}</h1><div className="overflow-x-auto">
                <div className='mx-16 mt-8'>
                    <table className="table table-compact w-full ">
                        <thead className=''>
                            <tr >
                                <th></th>
                                <th className='text-xl'>Name</th>
                                <th className='text-xl'>Service</th>
                                <th className='text-xl'>Time</th>
                                <th className='text-xl'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                service.map((s, index) => <tr key={index}>
                                    <th className='text-xl'>{index + 1}</th>
                                    <td className='text-xl'>{s.patient}</td>
                                    <td className='text-xl'>{s.treatment}</td>
                                    <td className='text-xl'>{s.slot}</td>
                                    <td className='text-xl'>{s.date}</td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;