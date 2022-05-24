import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Loading from '../../../../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import CardPayment from './CardPayment';

const stripePromise = loadStripe('pk_test_51L12h7FFRkXzSfTm4BbhvSh2a8xAedX62QCXlwx8NRcJwdUk8SVzF8josy9Vdg1SNXAgHU2PE3JnIh6EXLGTGZ1Y00o92XbEAH');


const OrderPayment = () => {
    const { orderId } = useParams();

    const { data: order, isLoading, refetch } = useQuery('order', () =>
        fetch(`http://localhost:5000/orders/${orderId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Navigate('/');
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            }))

    if (isLoading) {
        return <Loading></Loading>
    }

    const { name, productName, quantity, amount } = order;

    return (

        <div>
            <h2 className='text-center text-xl mt-5 mb-10 uppercase font-semibold'>Pay Here</h2>

            <div className='flex lg:h-80 items-center justify-center mt-5'>

                <div>
                    <div style={{ width: '600px' }} className="card max-w-md bg-base-100 shadow-xl my-12">
                        <div className="card-body">
                            <p className="text-success text-2xl font-bold">Hello, {name}</p>
                            <h2 className="card-title">Please Pay for {order.productName}</h2>

                            <p>Your order:
                                <span className='text-secondary font-semibold'> {quantity} </span>
                                quantity of {productName}</p>
                            <p>Please pay: <span className='font-bold text-secondary'>${amount}</span></p>
                        </div>
                    </div>


                    <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">

                            <Elements stripe={stripePromise}>
                                <CardPayment
                                    order={order}>
                                </CardPayment >
                            </Elements>
                        </div>
                    </div>


                </div>
            </div >
        </div>
    );
};

export default OrderPayment;