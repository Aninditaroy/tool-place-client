import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllOrdersRow from './ManageAllOrdersRow';
import UserRow from './UserRow';

const ManageAllOrders = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
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
            <div className='text-center'>

                <h2 className='text-3xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>All Orders</span></h2> <span className='text-sm text-center border-b-2 border-orange-200'>Total Users: <span className='font-semibold'>{orders.length} </span></span>
            </div>
            <div className="overflow-x-auto container mx-auto">
                <table className="table  w-2/3 mt-10 mb-64 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageAllOrdersRow index={index} key={order._id} order={order} refetch={refetch} ></ManageAllOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ManageAllOrders;