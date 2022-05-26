import React, { useEffect, useState } from 'react';
import UserReview from './UserReview';


const AllReview = () => {
    const [allReview, setAllReview] = useState([]);

    useEffect(() => {
        fetch('https://dry-caverns-08201.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [])
    return (
        <div>
            <h2 className='mt-5  text-3xl text-secondary font-bold text-center uppercase'>All Reviews</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-20 p-8'>
                {
                    allReview.map(review => <UserReview
                        key={review._id}
                        review={review}
                    ></UserReview>)
                }
            </div>

        </div>
    );
};

export default AllReview;