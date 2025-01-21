import JobCard from '@/components/allJobComponents/JobCard';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const randomjobs = [1, 2, 3, 4, 5]

const BrowsePage = () => {

    return (

        <>

            <Navbar />



            <div className='mt-7'>
                <div className='main-container'>

                    <h1 className='text-center font-bold text-2xl mb-7 '> Search Results: {randomjobs.length}</h1>

                    <div className='grid grid-cols-4 gap-4'>
                        {
                            randomjobs.map((item, i) => (
                                <JobCard key={i} />
                            ))
                        }
                    </div>

                </div>
            </div>



        </>
    );
};

export default BrowsePage;