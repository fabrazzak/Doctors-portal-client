import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './Modal.css'

const Modal = ({ treatment, date, setTreatment,refetch}) => {
    const {_id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const handleOnSubmitFormModal = (event) => {
        event.preventDefault();
        const dateFormate = format(date, 'PP');
        const slot = event.target.slot.value;
       
        const booking ={
            treatmentId:_id,
            treatment:name,
            slot,
            date:dateFormate,
            patient:user?.displayName,
            email:user?.email,
            phone:event.target.phone.value,

        }
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Appointment is set, ${dateFormate} at ${slot}`)

            }
            else{
                toast.error(`Sorry. Already have an appointment on ${data.exist.date}  at ${data.exist.slot} `);
                console.log(data)
            }
        })
        
        refetch();
        setTreatment(null)

      

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn text-info hover:text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for {name}</h3>
                    <form onSubmit={handleOnSubmitFormModal} className='grid grid-cols-1 gap-3 justify-items-center mt-5 '>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slots.indexOf(slot)} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user.displayName} className="text-lg input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' value={user.email} disabled className="text-lg input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' required placeholder="Phone Number" className="text-lg input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary text-lg font-bold w-full max-w-xs" />
                    </form>
                    <ToastContainer></ToastContainer>
                    <div className="modal-action">

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;