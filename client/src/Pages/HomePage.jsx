import CategoryCarousel from '@/components/allHomeComponents/CategoryCarousel';
import HeroSection from '@/components/allHomeComponents/HeroSection';
import LatestJob from '@/components/allHomeComponents/LatestJob';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import React from 'react';

const HomePage = () => {

    useGetAllJobs();

    return (

        <>
            <Navbar />
            <HeroSection />
            <CategoryCarousel />
            <LatestJob />
            <Footer />


        </>
    );
};

export default HomePage;