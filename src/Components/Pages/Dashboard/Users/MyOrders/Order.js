import React from 'react';



const Order = ({ order, index, refetch }) => {
    const { productName, quantity, amount } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>Total: {quantity}</td>
            <td>$ {amount}</td>

            <td>Pending</td>
            <td>
                <button className="btn btn-outline btn-sm btn-secondary">Not Paid</button>
            </td>

            {/* <td>
                <button className="btn btn-outline btn-sm btn-secondary">Pending</button>
            </td> */}


        </tr>

    );
};

export default Order;