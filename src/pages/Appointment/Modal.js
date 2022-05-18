import { format } from 'date-fns';
import React from 'react';
import './Modal.css'

const Modal = ({ treatment, date, setTretment}) => {
    const { name, slots } = treatment;
    const handleOnSubmitFormModal = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTretment(null)
      

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
                        <input type="text" name='name' placeholder="Full Name" className="text-lg input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="text-lg input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" className="text-lg input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary text-lg font-bold w-full max-w-xs" />
                    </form>
                    <div className="modal-action">

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;