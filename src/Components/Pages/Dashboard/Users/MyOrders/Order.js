import React from 'react';



const Order = ({ order, index, refetch, setDeleteOrder }) => {
    const { productName, quantity, amount } = order



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>Total: {quantity}</td>
            <td>$ {amount}</td>

            <td>Pending</td>
            <td>
                <button
                    className="btn btn-outline btn-sm btn-secondary">
                    Pay
                </button>
            </td>

            <td>
                <label
                    onClick={() => setDeleteOrder(order)}
                    className="btn btn-outline btn-sm btn-secondary"
                    htmlFor="cancel-confirm-modal"
                >Remove
                </label>
            </td>


        </tr>

    );
};

export default Order;