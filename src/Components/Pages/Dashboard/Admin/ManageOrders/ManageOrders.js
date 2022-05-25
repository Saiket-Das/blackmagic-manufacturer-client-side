import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag as serial } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping as quantity } from '@fortawesome/free-solid-svg-icons'
import { faDollar as amount } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle as status } from '@fortawesome/free-solid-svg-icons'
import { faTruck as delivery } from '@fortawesome/free-solid-svg-icons'
import { faTrash as cancel } from '@fortawesome/free-solid-svg-icons'
import OrderTable from './OrderTable';


const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-xl mt-5 mb-5 uppercase'>Manage Orders: {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th >
                                <div className='flex align-middle'>
                                    <FontAwesomeIcon className='text-secondary text-base' icon={serial} />
                                    <span className=' px-2'>No</span>
                                </div>
                            </th>

                            <th>Product name</th>

                            <th >
                                <div className='flex align-middle'>
                                    <FontAwesomeIcon className='text-secondary text-base' icon={quantity} />
                                    <span className=' px-2'>Quantity</span>
                                </div>
                            </th>

                            <th >
                                <div className='flex align-middle'>
                                    <FontAwesomeIcon className='text-secondary text-base' icon={amount} />
                                    <span className=' px-2 '>Amount</span>
                                </div>
                            </th>

                            <th >
                                <div className='flex align-middle'>
                                    <FontAwesomeIcon className='text-secondary text-base' icon={delivery} />
                                    <span className=' px-2'>Delivery Status</span>
                                </div>
                            </th>

                            <th >
                                <div className='flex align-middle'>
                                    <FontAwesomeIcon className='text-secondary text-base' icon={status} />
                                    <span className=' px-2'>Payment Status</span>
                                </div>
                            </th>

                            <th >
                                <div className='flex align-middle'>
                                    <FontAwesomeIcon className='text-secondary text-base' icon={cancel} />
                                    <span className=' px-2'>Shipped Order</span>
                                </div>
                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            orders.map((order, index) =>
                                <OrderTable
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    refetch={refetch}
                                ></OrderTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageOrders;