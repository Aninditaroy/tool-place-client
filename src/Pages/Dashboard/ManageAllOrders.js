import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import ManageAllOrdersRow from './ManageAllOrdersRow';


const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
        headers: {
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

                <h2 className='text-3xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Mnagae Tools</span></h2>
            </div>
            <div className="overflow-x-auto container mx-auto">
                <table className="table  w-2/3 mt-10 mb-64 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool Image</th>
                            <th>Tool Name</th>
                            <th>Ordered By</th>
                            <th>Ordered Quantity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageAllOrdersRow index={index} key={order._id} order={order} refetch={refetch} setDeletingOrder={setDeletingOrder}></ManageAllOrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteOrderModal
                    deletingTool={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                />
            }
        </>
    )
};

export default ManageAllOrders;