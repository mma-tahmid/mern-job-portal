import FilterCard from '@/components/allJobComponents/FilterCard';
import JobCard from '@/components/allJobComponents/JobCard';

import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { useSelector } from 'react-redux';

//const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]



const JobsPage = () => {

    const { allJobs } = useSelector((state) => state.jobslc)

    return (

        <>
            <Navbar />

            <div className='mt-6'>

                <div className='main-container '>

                    <div className='flex gap-5'>
                        {/* Filter Components */}
                        <div className='w-[20%]'>
                            <FilterCard />
                        </div>


                        {/* Job Cards Components */}
                        {

                            allJobs.length <= 0 ? <span> Job not found </span> :
                                (
                                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>

                                        <div className='grid grid-cols-3 gap-4'>
                                            {
                                                allJobs.map((item, i) => (
                                                    <div key={i}>
                                                        <JobCard jobProps={item} />
                                                    </div>
                                                ))
                                            }
                                        </div>

                                    </div>
                                )

                        }

                    </div>
                </div>
            </div>




        </>
    );
};

export default JobsPage;