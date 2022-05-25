import React from 'react';
import clients from '../../../../images/Outlet/customer.png'
// import outlet from '../../../../images/Outlet/australia.png'
import outlet from '../../../../images/Outlet/people.png'
import projects from '../../../../images/Outlet/hard-work.png'
import reviews from '../../../../images/Outlet/team.png'


const Outlet = () => {
    return (
        <div className='mt-36 bg-gray-100 py-16'>
            <div className=' mx-auto'>

                <h2 className='uppercase text-5xl font-bold text-secondary text-center'>Million business trust us</h2>
                <p className='text-2xl font-semibold text-center uppercase mt-8'>Undersatnd our users experience</p>


                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-24 mt-8 md:gap-24 gap-16 lg:p-20 p-8 mx-28'>
                    <div>
                        <img className='w-32' src={clients} alt="" />
                        <h2 className='mx-4 text-5xl font-bold text-primary'>200+</h2>
                        <p className='mx-8 text-xl font-bold text-secondary'>CLIENTS</p>
                    </div>

                    <div>
                        <img className='w-32' src={outlet} alt="" />
                        <h2 className='mx-8 text-5xl font-bold text-primary'>14</h2>
                        <p className='mx-2 text-xl font-bold text-secondary'>COUNTRIES</p>
                    </div>

                    <div>
                        <img className='w-32' src={projects} alt="" />
                        <h2 className='mx-4 text-5xl font-bold text-primary'>700+</h2>
                        <p className='mx-7 text-xl font-bold text-secondary'>PROJECTS</p>
                    </div>

                    <div>
                        <img className='w-32' src={reviews} alt="" />
                        <h2 className='mx-4 text-5xl font-bold text-primary'>550+</h2>
                        <p className='mx-7 text-xl font-bold text-secondary'>REVIEWS</p>
                    </div>
                </div>

            </div >
        </div>
    );
};

export default Outlet;