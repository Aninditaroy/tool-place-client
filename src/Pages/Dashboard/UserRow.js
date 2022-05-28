import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{<button className="btn btn-xs bg-red-200 hover:bg-red-500">Remove user</button>}</td>
        </tr >
    );
};

export default UserRow;