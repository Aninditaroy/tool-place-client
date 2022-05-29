import React from 'react';
import { toast } from 'react-toastify';

const ManageAllOrdersRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { _id, img, email, toolName } = order;

    const handlePending = () => {
        console.log('manage order haha')
        fetch(`https://secret-peak-21813.herokuapp.com/manageorders/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())

            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success(`Order successfully delivered`);
                    refetch();
                }
            })

    }


    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </td>

                <td>{toolName}</td>

                <td>{email}</td>


                <td >
                    {
                        (order.paid && order.pendingChange !== 'shipped') &&
                        <>
                            <button className='btn btn-xs btn-red-500 mr-2' onClick={handlePending}>Pending</button>
                        </>
                    }
                    {
                        (!order.paid) &&
                        <button disabled className='btn btn-xs btn-red-500 mr-3'>Unpaid</button>
                    }
                    {
                        (order.paid && order.pendingChange === 'shipped') &&
                        <>
                            <button disabled className='btn btn-xs btn-red-500'>Shipped</button>
                        </>
                    }
                </td>

                <td>
                    {
                        (!order.paid) ?

                            <label onClick={() => setDeletingOrder(order)} for="delete-order-modal" className="btn btn-xs hover:bg-red-300 rounded-full bg-gray-200 py-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -mt-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg></label>
                            :
                            <button disabled className='btn btn-xs hover:bg-red-300 rounded-full bg-gray-200 py-5'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -mt-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg> </button>
                    }
                </td>
            </tr>
        </>
    );
};

export default ManageAllOrdersRow;
