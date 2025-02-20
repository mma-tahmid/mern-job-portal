import React from 'react';
import { Badge } from '../ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ jobProps }) => {

    const navigate = useNavigate();

    return (

        <>
            <div onClick={() => navigate(`/job-description/${jobProps?._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer'>
                <div>
                    <h1 className='font-medium text-lg'>{jobProps?.companys?.companyName}</h1>
                    <p className='text-sm '>{jobProps?.joblocation}</p>
                </div>

                <div>
                    <h1 className='font-bold text-lg my-2'>{jobProps?.jobTitle}</h1>
                    <p className='text-sm text-gray-600 '>{jobProps?.description}   </p>
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <Badge className=' text-orange-700 font-bold' variant="secondary"> {jobProps?.Vacancies} Vacancies </Badge>
                    <Badge className=' text-[#7209b7]  font-bold' variant="secondary"> {jobProps?.jobType} </Badge>
                    <Badge className='text-red-900 font-bold' variant="secondary"> {jobProps?.salary} BDT </Badge>
                </div>
            </div>
        </>
    );
};

export default LatestJobCards;