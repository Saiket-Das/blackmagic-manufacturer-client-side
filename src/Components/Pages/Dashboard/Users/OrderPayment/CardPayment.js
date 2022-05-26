import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CardPayment = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { _id, name, email, amount } = order;
    const [paymentError, setPaymentError] = useState('')
    const [successPayment, setSuccessPayment] = useState('')
    const [transactionId, setTransactionID] = useState('');
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://dry-caverns-08201.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    if (data.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                }
            });

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

        setProcessing(true)

        if (error) {
            setPaymentError(error.message);
            setProcessing(false)
        }
        else {
            setPaymentError('')
        }

        // CONFIRM PAYMENT 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );


        if (intentError) {
            setPaymentError(intentError?.message);
            setSuccessPayment('')
            console.log(intentError)
        }
        else {
            setPaymentError('');
            setTransactionID(paymentIntent.id)
            setSuccessPayment('Congrats! Your payment is done');

            const paymentInfo = {
                productId: _id,
                transactionId: paymentIntent.id,
            }

            fetch(`https://dry-caverns-08201.herokuapp.com/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        if (data) {
                            setProcessing(false)
                            console.log(data)
                        }
                    }
                });
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
            <button className='btn btn-sm btn-secondary' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {paymentError &&
                <p className='text-center text-red-600 font-semibold'>{paymentError}</p>
            }
            {successPayment &&
                <>
                    <p className='text-center text-green-600 font-semibold'>{successPayment}
                    </p>
                    <p className='text-center text-secondary'> Your transaction ID:
                        <span className='font-bold '> {transactionId}</span>
                    </p>
                </>
            }

        </form>

    );
};

export default CardPayment;