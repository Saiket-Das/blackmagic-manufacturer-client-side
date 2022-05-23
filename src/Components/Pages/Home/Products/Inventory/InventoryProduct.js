import React from 'react';

const InventoryProduct = ({ product, index, setCheckoutProduct }) => {
    const { name, price, stock, img, description, } = product

    return (
        <tr>
            <th>{index + 1}</th>

            <td>
                <img className='w-36' src={img} alt={name} />
            </td>
            <td>{name}</td>
            <td>Total: {stock}</td>
            <td>$ {price}</td>

            <td>
                <label
                    htmlFor="purchase-modal"
                    onClick={() => setCheckoutProduct(product)}
                    className="btn btn-outline btn-sm btn-secondary">
                    Order
                </label>
            </td>

        </tr>
    );
};

export default InventoryProduct;