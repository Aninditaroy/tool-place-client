import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingTool, refetch, setDeletingTool }) => {
    const { name, _id } = deletingTool;
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/tool/${id}`, {
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
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;