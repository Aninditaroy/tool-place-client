import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import ManageAllOrdersRow from './ManageAllOrdersRow';


const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://secret-peak-21813.herokuapp.com/manageorders', {
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
        <div className='max-w-lg'>
            <div className='text-center'>

                <h2 className='text-3xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Manage Orders</span></h2>
            </div>
            <div className="overflow-x-auto container mx-auto">
                <table className="table  w-2/3 mt-10 mb-64 mx-auto  border-collapse block md:table  my-12 manage-inventory-container  shadow-2xl rounded-lg lg:w-4/5 md:w-4/5 sm:w-full ">
                    <thead className='block md:table-header-groups m:hidden visible'>
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
        </div>
    )
};

export default ManageAllOrders;