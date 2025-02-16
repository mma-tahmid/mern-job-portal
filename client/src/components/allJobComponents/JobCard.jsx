import React from 'react';
import { Button } from '../ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ jobProps }) => {

    const navigate = useNavigate();
    //const jobId = "jsdsbdjsjdbsj"

    const daysAgoFunction = (mongodbTime) => {
        const createdAtTime = new Date(mongodbTime)
        const currentTime = new Date();
        const timeDifference = currentTime - createdAtTime;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (

        <>
            <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 w-[300px] '>
                <div className='flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-500'>{daysAgoFunction(jobProps?.createdAt) === 0 ? "Today" : `${daysAgoFunction(jobProps?.createdAt)} days ago`}</p>
                    <Button variant="outline" className="rounded-full" size="icon"> <Bookmark /> </Button>
                </div>

                <div className='flex items-center gap-2 my-2'>
                    <Button className="p-6" variant="outline" size="icon">
                        <Avatar>

                            <AvatarImage src={jobProps?.companys?.logo} />

                        </Avatar>
                    </Button>
                    <div>
                        <h1 className='font-medium text-lg'>{jobProps?.companys?.companyName}</h1>
                        <p className='text-sm text-gray-500'>{jobProps?.joblocation}</p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-lg my-2'>{jobProps?.jobTitle}</h1>
                    <p className='text-sm text-gray-600'>{jobProps?.description}</p>
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <Badge className=' text-orange-700 font-bold' variant="secondary"> {jobProps?.Vacancies} Positions </Badge>
                    <Badge className=' text-[#7209b7]  font-bold' variant="secondary"> {jobProps?.jobType} </Badge>
                    <Badge className='text-red-900 font-bold' variant="secondary"> {jobProps?.salary} BDT </Badge>
                </div>

                <div className='flex items-center gap-4 mt-4'>
                    <Button onClick={() => navigate(`/job-description/${jobProps?._id}`)} variant="outline">Details</Button>
                    <Button variant="outline" className="bg-[#7209b7] text-[white]">Save for later</Button>
                </div>
            </div>
        </>
    );
};

export default JobCard;