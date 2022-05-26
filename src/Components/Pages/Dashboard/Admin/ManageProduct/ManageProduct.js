import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Shared/Loading/Loading';
import SingleProduct from './SingleProduct';

const ManageProduct = () => {

    const { data: products, isLoading, refetch } = useQuery('products', () =>
        fetch('https://dry-caverns-08201.herokuapp.com/products')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h2 className='text-2xl text-center p-10 font-bold text-secondary '> Our Inventory </h2>

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
                                            <span className=' px-2'>Delete</span>
                                        </div>
                                    </th>

                                </tr>
                            </thead>


                            <tbody>
                                {
                                    products.map((product, index) =>
                                        <SingleProduct
                                            key={product._id}
                                            product={product}
                                            index={index}
                                            refetch={refetch}
                                        ></SingleProduct>)
                                }
                            </tbody>
                        </table>

                        {/* {checkoutProduct && <Checkout
                        checkoutProduct={checkoutProduct}
                        setCheckoutProduct={setCheckoutProduct}
                        refetch={refetch}
                    ></Checkout>
                    } */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;