import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../../firebase.init';
import { toast } from 'react-toastify';




const Checkout = ({ checkoutProduct, setCheckoutProduct, refetch }) => {
    const { _id, price, name, stock } = checkoutProduct;
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user] = useAuthState(auth)

    const onSubmit = (data, e) => {

        const order = {
            name: user.displayName,
            email: user.email,
            productName: data.productName,
            quantity: data.quantity,
            phone: data.phone,
            city: data.city,
            address: data.address,
            amount: price * data.quantity
        }
        console.log(order)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Your order successful.')
                    e.target.reset();
                }
                setCheckoutProduct(null);
            })


        const updatedStock = stock - data.quantity;
        const currentStock = { stock: updatedStock }
        const url = `http://localhost:5000/products/${_id}`
        console.log(url)
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentStock)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })

    }

    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-semibold text-xl mb-5 text-center text-secondary uppercase">Check out {name}</h3>


                    {/* MODAL FORM  */}
                    <form
                        className='grid grid-cols-1 gap-3 justify-items-center p-5'
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        {/* -------- Your Name -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Your name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                readOnly disabled
                                {...register('name',
                                    { value: `${user.displayName}` },
                                )}
                            />
                        </div>

                        {/* -------- Your Email -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Your email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                                readOnly disabled
                                {...register('email',
                                    { value: `${user.email}` },
                                )}
                            />
                        </div>

                        {/* -------- Product Name -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Product name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                readOnly disabled
                                {...register('productName',
                                    { value: `${name}` },
                                )}
                            />
                        </div>


                        {/* -------- Total Quantity / Stock -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Product's available</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                readOnly disabled
                                {...register('stock',
                                    { value: `${stock}` },
                                )}
                            />
                        </div>


                        {/* -------- Type your needed quantity -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Select your needed quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("quantity",
                                    { required: true, min: 500, max: `${stock}` })
                                }
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">
                                        Input is required
                                    </span>
                                }

                                {errors.quantity?.type === 'min' &&
                                    <span className="label-text-alt text-red-500">
                                        At-least order 500.
                                    </span>
                                }

                                {errors.quantity?.type === 'max' &&
                                    <span className="label-text-alt text-red-500">
                                        Your total order's quantity exceed our available stock.
                                    </span>
                                }
                            </label>
                        </div>



                        {/* -------- Your Phone number -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Your phone number</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                placeholder='Provide your phone number'
                                {...register('phone')}
                            />
                        </div>

                        {/* -------- Your City -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Your city</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                placeholder='Your city'
                                {...register('city')}
                            />
                        </div>

                        {/* -------- Your Home Address -------- */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-secondary">Your city</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                placeholder="House, Block, Floor"
                                {...register('address')}
                            />
                        </div>

                        <input type="Submit" className="btn btn-secondary w-full max-w-xs" />

                    </form>

                </div>

            </div>
        </div >
    );
};

export default Checkout;