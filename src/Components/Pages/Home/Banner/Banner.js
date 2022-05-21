import React from 'react';
import banner from '../../../../images/Banner/home-banner.png'



const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='flex align-middle justify-center'>
                <div className="card lg:card-side lg:p-10">
                    <figure className='lg:w-8/12'>
                        <img src={banner} alt="" />
                    </figure>

                    <div className="card-body lg:mt-24 items-center">
                        <h2 className="card-title text-2xl">What we do actually?</h2>
                        <p className='border-2 lg:w-96'>Lenses are made of optical glass or plastic. Lenses are made of optical glass or plastic. Lenses are made of optical glass or plastic. Lenses are made of optical glass or plastic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;