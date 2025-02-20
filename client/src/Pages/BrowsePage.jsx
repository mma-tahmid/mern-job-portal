import JobCard from '@/components/allJobComponents/JobCard';
import Navbar from '@/components/shared/Navbar';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { SetSearchedQuery } from '@/react-redux/slice/jobSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//const randomjobs = [1, 2, 3, 4, 5]

const BrowsePage = () => {

    useGetAllJobs();

    const { allJobs } = useSelector((state) => state.jobslc)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(SetSearchedQuery(""))
        }
    })


    return (

        <>

            <Navbar />



            <div className='mt-7'>
                <div className='main-container'>

                    <h1 className='text-center font-bold text-2xl mb-7 '> Search Results: {allJobs.length}</h1>

                    <div className='grid grid-cols-4 gap-4'>
                        {
                            allJobs.map((item, i) => (
                                <JobCard jobProps={item} key={i} />
                            ))
                        }
                    </div>

                </div>
            </div>



        </>
    );
};

export default BrowsePage;