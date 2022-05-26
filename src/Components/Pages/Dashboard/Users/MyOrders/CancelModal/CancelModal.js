import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({ deleteOrder, setDeleteOrder, refetch }) => {

    const { _id, productName, name } = deleteOrder;

    const handleDelete = () => {
        const url = `https://dry-caverns-08201.herokuapp.com/orders/${_id}`;
        console.log(url)
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    setDeleteOrder(null)
                    toast.success(`Your ${name} order has been deleted`)
                }
                refetch()
            })

    }

    return (
        <div>

            <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure?</h3>

                    <p className="py-4">You want to delete
                        <span className='font-bold'> ${productName}'s order. </span>
                        If you delete once, you will not get back.</p>
                    <div className="modal-action flex justify-center items-center">
                        <label
                            htmlFor="cancel-confirm-modal"
                            className="btn btn-sm">
                            Close
                        </label>

                        <button
                            onClick={() => handleDelete()}
                            className="btn btn-sm btn-outline btn-error">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;