import React from 'react';

const ManageToolRow = ({ tool, index, setDeletingTool, refetch }) => {
    const { name, img, description, min_order_quantity, available_quantity, price } = tool;
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
                        <div>
                            <div class="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td className='break-all'>{description}</td>
                <td>{min_order_quantity}</td>
                <td>{available_quantity}</td>
                <td>{price}</td>
                <td className=''><label onClick={() => setDeletingTool(tool)} for="delete-confirm-modal" className="btn btn-xs hover:bg-red-300 rounded-full bg-gray-200 py-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -mt-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg></label></td>
            </tr >
        </>
    );
};

export default ManageToolRow;