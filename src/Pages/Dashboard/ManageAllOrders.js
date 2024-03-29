import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import ManageAllOrdersRow from './ManageAllOrdersRow';


const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://tool-place-server-side.vercel.app/manageorders', {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    const [deletingOrder, setDeletingOrder] = useState(null);
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <div className='text-center'>
                <h2 className='text-3xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Manage Orders</span></h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full mt-10 mb-64 mx-auto">
                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Tool Image</th>
                            <th>Tool Name</th>
                            <th>Ordered By</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageAllOrdersRow
                                index={index}
                                key={order._id}
                                order={order}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteOrderModal
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                />
            }
        </>
    )
};

export default ManageAllOrders;