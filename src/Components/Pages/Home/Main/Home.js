import React from 'react';
import Banner from '../Banner/Banner';
import BrandCollabration from '../BrandCollabration/BrandCollabration';
import Outlet from '../Outlet/Outlet';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <BrandCollabration></BrandCollabration>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;