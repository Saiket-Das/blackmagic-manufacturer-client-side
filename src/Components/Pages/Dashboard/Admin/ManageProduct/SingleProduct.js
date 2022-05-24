import React from 'react';
import { toast } from 'react-toastify';

const SingleProduct = ({ product, index, refetch }) => {
    const { _id, name, price, stock, img } = product;


    const handleProductDelete = (id) => {
        const confirm = window.confirm('Are you sure?')
        if (confirm) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`${name} is deleted Successfully.`)
                    }
                    refetch()
                })
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>

            <td>
                <img className='w-36' src={img} alt={name} />
            </td>
            <td>{name}</td>
            <td>{stock}</td>
            <td>$ {price}</td>

            <td>
                <button
                    onClick={() => handleProductDelete(_id)}
                    className="btn btn-xs btn-secondary">
                    Delete
                </button>
            </td>

        </tr>
    );
};

export default SingleProduct;