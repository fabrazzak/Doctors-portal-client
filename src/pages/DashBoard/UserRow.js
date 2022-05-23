import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({index,user,refetch}) => {
    const handleMakeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: { "authorization": `Bearer ${localStorage.getItem("accessToken")}` }
        })
            .then(res =>{
                if(res.status === 403 ){
                    toast.error("Fail make an admin")
                }
                return res.json
            } )
            .then(data => {

                refetch();
                if(data.modifyCount > 0){
                    toast.success("Successfully made an admin")
                    

                }
                
            })




    }
    return (
        <tr key={index}>
            <th className='text-xl'>{index + 1}</th>
            <td className='text-xl'>{user.email}</td>

            {user.role !== "admin" ? <td className='text-xl' onClick={handleMakeAdmin}><button className='btn btn-active font-bold'>Make admin</button> 
            </td> : <td className='text-xl'><button class="btn btn-active btn-ghost">Admin</button>
            </td> }

            <td className='text-xl'><button className='btn btn-active'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;