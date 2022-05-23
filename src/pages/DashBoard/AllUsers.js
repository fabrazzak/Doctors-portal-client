import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';
import UserRow from './UserRow';


const AllUsers = () => {
    const { data: users, error, isLoading, refetch } = useQuery('user', () => fetch(`http://localhost:5000/user`,{method:"GET",headers:{authorization:`Bearer ${localStorage.getItem("accessToken")}`}}).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
 
    return (
        <div>
            <h1 className='text-2xl ml-6 mt-6 font-bold'>All User {users?.length}</h1>
            <div className='mx-16 mt-8'>
                <table className="table table-compact w-full ">
                    <thead className=''>
                        <tr >
                            <th key={1}  className='text-xl'>S/N</th>
                            <th key={2} className='text-xl'>Email</th>
                            <th key={3} className='text-xl'>Admin</th>
                            <th key={4} className='text-xl'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((s, index) => <UserRow user={s} index={index} refetch={refetch}></UserRow>)
                        }


                    </tbody>

                </table>
            </div>

            
        </div>
    );
};

export default AllUsers;