import React, { useEffect, useState } from 'react';
import Review from './Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight as faArrow } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://dry-caverns-08201.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='bg-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 lg:p-40 p-8'>
                {
                    reviews.slice(-3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

                <div className="card review-card lg:max-w-lg bg-base-100 shadow-md">
                    <button className=' my-auto'
                        onClick={() => navigate('/reviews')}>
                        <div className="card-body items-center justify-center">
                            <div className='bg-gray-100 p-3 rounded-full'>
                                <FontAwesomeIcon className='text-3xl' icon={faArrow} />
                            </div>
                            <span className='text-xl'>See more reviews</span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Reviews;