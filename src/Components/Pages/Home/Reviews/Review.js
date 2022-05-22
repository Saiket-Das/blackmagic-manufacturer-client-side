import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf as faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, faStarHalfAlt)




const Review = (props) => {
    const { name, email, start, ratingsCount, comment } = props.review
    const rating = parseFloat(start)

    let starReview;

    if (rating === 1) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }

    else if (rating === 2) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }
    else if (rating === 2.5) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
        </span>
    }

    else if (rating === 3) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }
    else if (rating === 3.5) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
        </span>
    }
    else if (rating === 4) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }
    else if (rating === 4.5) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
        </span>
    }
    else if (rating === 5) {
        starReview = <span>
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
            <FontAwesomeIcon icon={fasFaStar} />
        </span>
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md">
            <div className="card-body ">
                <h2 className="card-title block">{name}
                </h2>
                <span>{email}</span>
                <p> <span>{comment}</span></p>
                <p>Total Review: {ratingsCount}</p>
                <p className='text-orange-500'>{starReview}</p>

            </div>
        </div>
    );
};

export default Review;