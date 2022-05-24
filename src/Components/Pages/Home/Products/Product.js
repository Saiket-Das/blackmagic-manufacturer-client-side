import React from 'react';
import { Link } from 'react-router-dom';



const Product = ({ product }) => {
    const { name, price, stock, img, description } = product
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md border-0">
            <figure><img src={img} className='p-5' alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p className=''>{description}</p>

                <p className='text-xl font-semibold'>
                    <span>Price: </span>
                    <span className=' text-secondary'>${price} </span>
                </p>

                <p className='mb-4'>
                    {/* <FontAwesomeIcon className='text-xl pr-2' icon={faStock} /> */}
                    <span>Stocks: {stock}</span>
                </p>


                {/* <div className="card-actions justify-center">
                    <label
                        htmlFor="purchase-modal"
                        className="btn btn-secondary"
                    >Purchase</label>

                </div> */}
                <div className='frame card-actions justify-center'>
                    <Link to='/inventory'>
                        <button className="custom-btn see-all-btn">
                            <span>
                                Know more
                            </span>
                        </button>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default Product;