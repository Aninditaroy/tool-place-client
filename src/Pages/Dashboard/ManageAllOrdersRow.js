import React from 'react';
import { toast } from 'react-toastify';

const ManageAllOrdersRow = ({ order, index, refetch, setdeletingUser }) => {
    // const { name, email } = order;
    // const handleDelete = email => {
    //     fetch(`http://localhost:5000/user/${email}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount) {
    //                 toast.success(`User: ${name} is deleted`);
    //                 refetch();
    //             }
    //         })
    // }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                {/* <td>{email}</td> */}

            </tr>
        </ >
    );
};

export default ManageAllOrdersRow;