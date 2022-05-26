import React from 'react';
import sony from '../../../../images/Brand/sony.png';
import huawei from '../../../../images/Brand/huawei.png';
import zoom from '../../../../images/Brand/zoom.png';
import sandisk from '../../../../images/Brand/sandisk.png';
import gopro from '../../../../images/Brand/gopro.png';


const BrandCollabration = () => {
    return (
        <div className='mt-36 mb-36'>
            <div className='w-10/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-8 lg:p-20 p-8 mx-20'>
                    <img className='w-28' src={sony} alt="" />
                    <img className='w-28' src={zoom} alt="" />
                    <img className='w-28' src={huawei} alt="" />
                    <img className='w-28' src={sandisk} alt="" />
                    <img className='w-28' src={gopro} alt="" />
                </div>

            </div >
        </div>
    );
};

export default BrandCollabration;