import React from 'react';
import banner from '../../../../images/Banner/banner.png'



const Banner = () => {
    return (
        <div className=''>
            <div className='flex align-middle justify-center '>
                <div className="card lg:card-side lg:p-10 bg-gray-100">
                    <div className="card-body lg:mt-40 items-center">
                        <h2 className=" text-3xl text-secondary font-bold uppercase">What we do actually?</h2>
                        <p className='lg:w-4/5 text-xl'>The lenses in your cameras have undergone quite a journey. Better vision explains how glass and plastic spectacle lenses are made.</p>
                    </div>

                    <figure className='lg:w-10/12		'>
                        <img src={banner} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;