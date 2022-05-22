import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import Checkout from './Checkout/Checkout';
// import { Link } from 'react-router-dom';
import Product from './Product';
import './Products.css'


const Products = () => {

    const [checkoutProduct, setCheckoutProduct] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])


    const { data: products, isLoading, refetch } = useQuery('products', () =>
        fetch('http://localhost:5000/products')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' mt-20 mb-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  lg:px-40 p-8'>

                {
                    products.slice(-6).map(product =>
                        <Product
                            key={product._id}
                            product={product}
                            setCheckoutProduct={setCheckoutProduct}
                        ></Product>)
                }
            </div>

            {checkoutProduct && <Checkout
                checkoutProduct={checkoutProduct}
                setCheckoutProduct={setCheckoutProduct}
                refetch={refetch}
            ></Checkout>
            }


            {/* <div className='frame'>
                <Link to='/allProducts'>
                    <button className="custom-btn see-all-btn">
                        <span>
                            See more products
                        </span>
                    </button>
                </Link>
            </div> */}
        </div>
    );
};

export default Products;