import FilterCard from '@/components/allJobComponents/FilterCard';
import JobCard from '@/components/allJobComponents/JobCard';

import Navbar from '@/components/shared/Navbar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { motion } from "framer-motion"

//const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]



const JobsPage = () => {

    const { allJobs, searchedQuery } = useSelector((state) => state.jobslc)

    const [filterJobss, setFilterJobss] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((jb) => {
                return (
                    jb.jobTitle.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    jb.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    jb.joblocation.toLowerCase().includes(searchedQuery.toLowerCase())

                )
            })

            setFilterJobss(filteredJobs)
        }
        else {
            setFilterJobss(allJobs)
        }

    }, [allJobs, searchedQuery])

    // useEffect(() => {
    //     console.log("All Jobs:", allJobs); // Debugging
    //     console.log("Search Query:", searchedQuery);

    //     if (!Array.isArray(allJobs)) return; // Ensure allJobs is an array
    //     const query = searchedQuery ? searchedQuery.toLowerCase() : "";

    //     if (query) {
    //         const filteredJobs = allJobs.filter((jb) => {
    //             return (
    //                 jb.jobTitle?.toLowerCase().includes(query) ||
    //                 jb.description?.toLowerCase().includes(query) ||
    //                 jb.joblocation?.toLowerCase().includes(query) 
    //                 // jb.salary?.toLowerCase().includes(query)
    //             );
    //         });

    //         setFilterJobss(filteredJobs);
    //     } else {
    //         setFilterJobss(allJobs);
    //     }
    // }, [allJobs, searchedQuery]);

    // both are ok

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

                            filterJobss.length <= 0 ? <span> Job not found </span> :
                                (
                                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>

                                        <div className='grid grid-cols-3 gap-4'>
                                            {
                                                filterJobss.map((item, i) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -100 }}
                                                        transition={{ duration: 0.3 }}
                                                        key={i}>
                                                        <JobCard jobProps={item} />
                                                    </motion.div>
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