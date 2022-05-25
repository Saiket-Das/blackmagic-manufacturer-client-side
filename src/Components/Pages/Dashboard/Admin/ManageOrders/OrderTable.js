import React from 'react';



const OrderTable = ({ order, index, refetch }) => {

    const { _id, productName, status, quantity, amount } = order;

    const handleShipping = () => {
        const updateOrder = {
            status: 'Shipping',
            paid: order.paid

        }
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    if (data) {
                        console.log(data)
                    }
                }
            });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>Total: {quantity}</td>
            <td>$ {amount}</td>

            <td>
                {
                    status
                        ? <p className='text-success font-bold'>On the Way</p>
                        :
                        <p>Pending</p>
                }

            </td>
            <td>
                {
                    amount && !order.paid && <button
                        className="btn btn-outline btn-sm btn-secondary">
                        Unpaid
                    </button>
                }

                {
                    amount && order.paid && <p className='text-success font-bold'>Already Paid</p>
                }

            </td>

            <td>
                {
                    amount && order.paid && <button
                        onClick={handleShipping}
                        className="btn w-28 btn-outline btn-sm btn-secondary">
                        Submit
                    </button>
                }

                {
                    amount && !order.paid && <button
                        className="btn btn-outline btn-sm btn-secondary">
                        Send Email
                    </button>
                }
            </td>
        </tr>
    );
};

export default OrderTable;