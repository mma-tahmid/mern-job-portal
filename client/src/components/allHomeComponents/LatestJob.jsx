import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

//const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8]

const LatestJob = () => {

    const { allJobs } = useSelector((state) => state.jobslc)

    return (

        <>
            <div className='mt-6'>
                <div className='main-container '>

                    <h1 className='text-4xl text-center font-bold'>Latest & Top <span className='text-[#6A38C2]'>Job</span> </h1>

                    <div className='grid grid-cols-3 gap-4 mt-8 '>

                        {
                            allJobs.length <= 0 ? <span> No Job Found </span> :

                                allJobs.slice(0, 6).map((singleJob, i) => (

                                    <div key={i}>
                                        <LatestJobCards jobProps={singleJob} />
                                    </div>
                                ))
                        }

                    </div>





                </div>
            </div>
        </>
    );
};

export default LatestJob;