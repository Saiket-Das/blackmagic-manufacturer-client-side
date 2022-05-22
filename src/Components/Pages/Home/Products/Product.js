import React from 'react';

const Product = (props) => {
    const { name, price, stock, img } = props.product
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md border-0">
            <figure><img src={img} className='p-5' alt="Shoes" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title text-center">{name}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <p>Price: ${price}</p>
                <p>Stock: {stock}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;