import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Loading from '../../../Shared/Loading/Loading';
// import Checkout from './Checkout/Checkout';
// import { Link } from 'react-router-dom';
import Product from './Product';
import './Products.css'


const Products = () => {

    const [products, setProducts] = useProducts()

    // const { data: products, isLoading, refetch } = useQuery('products', () =>
    //     fetch('https://dry-caverns-08201.herokuapp.com/products')
    //         .then(res => res.json())
    // )

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://dry-caverns-08201.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    return (
        <div className=' mt-20 mb-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  lg:px-40 p-8'>

                {
                    products.slice(-6).map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                }
            </div>



            <div className='frame'>
                <Link to='/inventory'>
                    <button className="custom-btn see-all-btn">
                        <span>
                            See more products
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Products;