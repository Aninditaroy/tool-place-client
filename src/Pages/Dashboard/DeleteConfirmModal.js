import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingTool, refetch, setDeletingTool }) => {
    const { name, _id } = deletingTool;
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://tool-place-server-1bxqf488v-aninditaroy.vercel.app/tool/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Tool: ${name} is deleted`);
                    setDeletingTool(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto text-red-600 my-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <h3 className="font-bold text-sm text-center">Are you sure you want to delete {name}?</h3>
                    <div className="modal-action flex justify-center">
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs  max-w-xs text-white  bg-red-600 h-10  hover:bg-red-300  hover:opacity-.5 active:shadow-lg shadow transition ease-in duration-200 focus:outline-none rounded-full px-10">Delete</button>
                        <label for="delete-confirm-modal" className="btn btn-xs  max-w-xs text-white  bg-black h-10  hover:opacity-.5 active:shadow-lg shadow transition ease-in duration-200 focus:outline-none rounded-full px-10">Cancel</label>
                    </div>
                    <p className='text-xs text-error text-center my-5'><small>Once you delete,this process cannot be undone!</small></p>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;