import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Shared/Loading/Loading';
import Checkout from '../Checkout/Checkout';
import InventoryProduct from './InventoryProduct';



const Inventory = () => {
    const [checkoutProduct, setCheckoutProduct] = useState(null);
    const { data: productList, isLoading, refetch } = useQuery('products', () =>
        fetch('http://localhost:5000/products')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='mt-5 mb-10 text-3xl text-secondary font-bold text-center uppercase'>Our inventory</h2>

            <div className="overflow-x-auto">

                <div className='lg:w-4/5  mx-auto'>

                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th >
                                    <div className='flex align-middle'>
                                        <span className=' px-2'>No</span>
                                    </div>
                                </th>

                                <th>Image</th>
                                <th>Product name</th>

                                <th >
                                    <div className='flex align-middle'>
                                        <span className=' px-2'>Stock</span>
                                    </div>
                                </th>

                                <th >
                                    <div className='flex align-middle'>
                                        <span className=' px-2 '>Amount</span>
                                    </div>
                                </th>

                                <th >
                                    <div className='flex align-middle'>
                                        <span className=' px-2'>Order</span>
                                    </div>
                                </th>

                            </tr>
                        </thead>


                        <tbody>
                            {
                                productList.map((product, index) =>
                                    <InventoryProduct
                                        key={product._id}
                                        product={product}
                                        index={index}
                                        refetch={refetch}
                                        setCheckoutProduct={setCheckoutProduct}
                                    ></InventoryProduct>)
                            }
                        </tbody>
                    </table>

                    {checkoutProduct && <Checkout
                        checkoutProduct={checkoutProduct}
                        setCheckoutProduct={setCheckoutProduct}
                        refetch={refetch}
                    ></Checkout>
                    }

                </div>
            </div>
        </div>
    );
};

export default Inventory;