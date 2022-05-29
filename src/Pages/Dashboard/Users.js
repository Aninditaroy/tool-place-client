import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://secret-peak-21813.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-2xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>All Users</span></h2>
            <div className="overflow-x-auto container">
                <table className="table  w-2/3 mt-10 mb-64 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow index={index} key={user._id} user={user} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Users;