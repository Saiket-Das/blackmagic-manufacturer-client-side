import React from 'react';
import { Link } from 'react-router-dom';



const Order = ({ order, index, refetch, setDeleteOrder }) => {
    const { _id, productName, quantity, amount } = order



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>Total: {quantity}</td>
            <td>$ {amount}</td>

            <td>Pending</td>
            <td>
                <Link to={`payment/${_id}`}>
                    <button
                        className="btn btn-outline btn-sm btn-secondary">
                        Pay
                    </button>
                </Link>
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