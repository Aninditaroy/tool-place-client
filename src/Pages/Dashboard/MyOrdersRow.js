import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersRow = ({ order, index, setDeletingOrder, refetch }) => {
    const { _id, email, userName, toolName, address, price, paid, transactionId } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{userName}</td>
            <td>{toolName}</td>
            <td>{address}</td>
            <td>{price}</td>
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                {(price && paid) && <>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
                </>}
            </td>
            <td><label onClick={() => setDeletingOrder(order)} for="delete-order-modal" className="btn btn-xs hover:bg-red-300 rounded-full bg-gray-200 py-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -mt-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></label></td>
        </tr>
    );
};

export default MyOrdersRow;