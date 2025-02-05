import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SetSingleJob } from '@/react-redux/slice/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const JobDescriptionPage = () => {

    const isApplied = false

    const params = useParams();
    const jobId = params.id

    const dispatch = useDispatch();

    const { singleJob } = useSelector((state) => state.jobslc)
    const { currentUser } = useSelector((state) => state.userAuth)

    const fetchSingleJob = async () => {

        try {
            const response = await axios.get(`/api/v8/job/student-job/${jobId}`)
            if (response.data.success) {
                dispatch(SetSingleJob(response.data.output))
            }
        }

        catch (error) {
            console.log(error)
            toast.error(error.response.data.message, { position: "bottom-left" }) // show:   Error in Getting Single Job from Backend
        }
    }


    useEffect(() => {
        fetchSingleJob()
    }, [jobId, dispatch, currentUser?._id])

    return (

        <>

            <div className='mt-7'>
                <div className='main-container'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold text-xl'>{singleJob?.jobTitle}</h1>

                            <div className='flex items-center gap-2 mt-4'>
                                <Badge className=' text-orange-700 font-bold' variant="secondary"> {singleJob?.Vacancies} Positions </Badge>
                                <Badge className=' text-[#7209b7]  font-bold' variant="secondary"> {singleJob?.jobType} </Badge>
                                <Badge className='text-red-900 font-bold' variant="secondary"> {singleJob?.salary}  BDT </Badge>
                            </div>
                        </div>

                        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-700 cursor-not-allowed' : 'bg - [#7209b7] hover:bg-[#5f32ad]'}`}>  {isApplied ? 'Already Applied' : 'Apply Now'}</Button>
                    </div>

                    <h1 className='font-bold text-center text-3xl my-4'> Job Description </h1>

                    <div>
                        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gary-800'>{singleJob?.jobTitle}</span></h1>
                        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gary-800'>{singleJob?.joblocation}</span></h1>
                        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gary-800'>{singleJob?.description}</span></h1>
                        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gary-800'>{singleJob?.experienceLevel} Years</span></h1>
                        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gary-800'>BDT {singleJob?.salary} </span></h1>
                        <h1 className='font-bold my-1'>Total Applicant: <span className='pl-4 font-normal text-gary-800'> {singleJob?.applications.length}</span></h1>
                        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gary-800'> {singleJob?.createdAt.split("T")[0]} </span></h1>
                    </div>

                </div>
            </div>
        </>

    );
};

export default JobDescriptionPage;