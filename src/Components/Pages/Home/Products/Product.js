import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse as faStock } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, stock, img, description } = props.product
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md border-0">
            <figure><img src={img} className='p-5' alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p className=''>{description}</p>

                <p className='text-xl'>
                    <span className='font-bold'>Price: </span>
                    <span className='font-bold text-secondary'>${price} </span>
                </p>

                <p className='mb-4'>
                    <FontAwesomeIcon className='text-xl pr-2' icon={faStock} />
                    <span>Stocks: {stock}</span>
                </p>


                <div className="card-actions justify-center">
                    <button className="btn btn-primary px-9">Buy Now</button>
                </div>

            </div>
        </div>
    );
};

export default Product;