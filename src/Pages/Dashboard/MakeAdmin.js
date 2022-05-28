import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';


const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
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
            <h2 className='text-2xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Make Admin</span></h2>
            <div className="overflow-x-auto container mx-auto">
                <table className="table w-full mt-10 mb-64">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <MakeAdminRow index={index} key={user._id} user={user} refetch={refetch}></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MakeAdmin;