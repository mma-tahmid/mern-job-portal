import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react';

const JobDescriptionPage = () => {

    const isApplied = false

    return (

        <>

            <div className='mt-7'>
                <div className='main-container'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold text-xl'>Frontend Developer</h1>

                            <div className='flex items-center gap-2 mt-4'>
                                <Badge className=' text-orange-700 font-bold' variant="secondary"> 12 Positions </Badge>
                                <Badge className=' text-[#7209b7]  font-bold' variant="secondary"> Part Time </Badge>
                                <Badge className='text-red-900 font-bold' variant="secondary"> 24 LPA </Badge>
                            </div>
                        </div>

                        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-700 cursor-not-allowed' : 'bg - [#7209b7] hover:bg-[#5f32ad]'}`}>  {isApplied ? 'Already Applied' : 'Apply Now'}</Button>
                    </div>

                    <h1 className='font-bold text-center text-3xl my-4'>Job Description </h1>

                    <div>
                        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gary-800'>Frontend Developer</span></h1>
                        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gary-800'>Dhaka</span></h1>
                        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gary-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae, rem consequatur quos quia dolor.</span></h1>
                        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gary-800'>2 Years</span></h1>
                        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gary-800'>BDT 30k </span></h1>
                        <h1 className='font-bold my-1'>Total Applicant: <span className='pl-4 font-normal text-gary-800'>05</span></h1>
                        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gary-800'>22-01-2025</span></h1>
                    </div>

                </div>
            </div>
        </>

    );
};

export default JobDescriptionPage;