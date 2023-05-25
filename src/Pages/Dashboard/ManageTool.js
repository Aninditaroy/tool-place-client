import React, { useState } from 'react';
import useTools from '../../hooks/useTools';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageToolRow from './ManageToolRow';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageTool = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://tool-place-server-side.vercel.app/tool', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    const [deletingTool, setDeletingTool] = useState(null);
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <h2 className='text-2xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Manage Tools</span></h2>
            <div className="overflow-x-auto">
                <table className="table w-full mt-10 mb-64 mx-auto table-compact">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Min Order <br /> Quantity</th>
                            <th>Available <br /> Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ManageToolRow
                                key={tool._id}
                                tool={tool}
                                refetch={refetch}
                                setDeletingTool={setDeletingTool}
                                index={index} />)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingTool && <DeleteConfirmModal
                    deletingTool={deletingTool}
                    refetch={refetch}
                    setDeletingTool={setDeletingTool}
                />
            }
        </ >

    );
};

export default ManageTool;