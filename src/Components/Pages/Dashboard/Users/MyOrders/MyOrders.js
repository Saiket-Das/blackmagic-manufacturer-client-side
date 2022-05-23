import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../../firebase.init';
import Loading from '../../../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag as serial } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping as quantity } from '@fortawesome/free-solid-svg-icons'
import { faDollar as amount } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle as status } from '@fortawesome/free-solid-svg-icons'
import { faTruck as delivery } from '@fortawesome/free-solid-svg-icons'
import { faTrash as cancel } from '@fortawesome/free-solid-svg-icons'
import Order from './Order';
import CancelModal from './CancelModal/CancelModal';




const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const [user] = useAuthState(auth);
    const email = user.email;

    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders?email=${email}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-xl mt-5 mb-5 uppercase'>My all orders</h2>

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
                                    <span className=' px-2'>Cancel Order</span>
                                </div>
                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            orders.map((order, index) =>
                                <Order
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteOrder={setDeleteOrder}
                                ></Order>)
                        }
                    </tbody>
                </table>

                <div>
                    {
                        deleteOrder && <CancelModal
                            deleteOrder={deleteOrder}
                            setDeleteOrder={setDeleteOrder}
                            refetch={refetch}
                        ></CancelModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;