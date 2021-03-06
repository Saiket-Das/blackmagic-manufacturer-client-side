import React from 'react';
import Banner from '../Banner/Banner';
import BrandCollabration from '../BrandCollabration/BrandCollabration';
import Footer from '../Footer/Footer';
import Outlet from '../Outlet/Outlet';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import SocialMedia from '../SocialMedia/SocialMedia'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <BrandCollabration></BrandCollabration>
            <Outlet></Outlet>
            <SocialMedia></SocialMedia>
            <Footer></Footer>
        </div>
    );
};

export default Home;