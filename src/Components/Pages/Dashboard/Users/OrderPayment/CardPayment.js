import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CardPayment = ({ order }) => {
    const { amount } = order;
    console.log(amount)

    const [paymentError, setPaymentError] = useState('')

    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }, [amount])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPaymentError(error.message);
        }
        else {
            setPaymentError('')
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-secondary' type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {paymentError &&
                <p className='text-center text-red-600 font-semibold'>{paymentError}</p>}
        </form>

    );
};

export default CardPayment;