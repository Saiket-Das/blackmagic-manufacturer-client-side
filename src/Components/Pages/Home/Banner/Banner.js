import React from 'react';
import banner from '../../../../images/Banner/banner.png'



const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='flex align-middle justify-center'>
                <div className="card lg:card-side lg:p-10">
                    <div className="card-body lg:mt-48 items-center">
                        <h2 className=" text-3xl text-secondary font-bold uppercase">What we do actually?</h2>
                        <p className='lg:w-4/5 text-xl'>Lenses are made of optical glass or plasti made of optical glass or plastic. Lenses are made of optical glass or plastic.</p>
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