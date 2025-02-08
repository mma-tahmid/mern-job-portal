import CategoryCarousel from '@/components/allHomeComponents/CategoryCarousel';
import HeroSection from '@/components/allHomeComponents/HeroSection';
import LatestJob from '@/components/allHomeComponents/LatestJob';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    useGetAllJobs();

    const { currentUser } = useSelector((state) => state.userAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser?.role === 'recruiter') {
            navigate("/admin/companies")
        }
    }, [])

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