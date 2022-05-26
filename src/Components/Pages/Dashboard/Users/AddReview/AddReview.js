import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../../firebase.init';



const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const onSubmit = (data, e) => {
        const review = {
            name: user.displayName,
            email: user.email,
            star: data.star,
            comment: data.comment,
        }
        console.log(review)

        fetch('https://dry-caverns-08201.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Thanks for your feedback')
                    e.target.reset();
                    navigate('/reviews')
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-xl mt-5 mb-5 uppercase'>Add your comment here!</h2>

            <div className='flex lg:h-90 justify-center items-center mt-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl text-secondary font-bold uppercase">Comment Box </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>


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

                            {/* Rating  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Rate us between 0-5"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("star")}
                                />
                            </div>

                            {/* Comment Area  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold text-secondary">Comment</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Write your comment"
                                    className="textarea textarea-bordered w-full max-w-xs mb-5"
                                    rows="4"
                                    {...register("comment",)}
                                />

                            </div>

                            {/* Submit Button  */}
                            <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value="Submit" />
                        </form>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default AddReview;