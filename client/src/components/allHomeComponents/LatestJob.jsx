import React from 'react';
import LatestJobCards from './LatestJobCards';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8]

const LatestJob = () => {

    return (

        <>
            <div className='mt-6'>
                <div className='main-container '>

                    <h1 className='text-4xl text-center font-bold'>Latest & Top <span className='text-[#6A38C2]'>Job</span> </h1>

                    <div className='grid grid-cols-3 gap-4 mt-8 '>

                        {
                            randomJobs.slice(0, 6).map((item, i) => (

                                <div key={i}>
                                    <LatestJobCards />
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