import React from 'react';
import { Button } from '../ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import {useNavigate } from 'react-router-dom';

const JobCard = () => {

    const navigate = useNavigate();
    const jobId = "jsdsbdjsjdbsj"

    return (

        <>
            <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 w-[300px] '>
                <div className='flex items-center justify-between'>
                    <p className='text-sm font-semibold text-gray-500'>2 days ago</p>
                    <Button variant="outline" className="rounded-full" size="icon"> <Bookmark /> </Button>
                </div>

                <div className='flex items-center gap-2 my-2'>
                    <Button className="p-6" variant="outline" size="icon">
                        <Avatar>

                            <AvatarImage src="https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png" />

                        </Avatar>
                    </Button>
                    <div>
                        <h1 className='font-medium text-lg'>Company Name</h1>
                        <p className='text-sm text-gray-500'>Bangladesh</p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-lg my-2'>Title</h1>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque quo odit alias animi blanditiis dignissimos temporibus quasi veniam maxime!</p>
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <Badge className=' text-orange-700 font-bold' variant="secondary"> 12 Positions </Badge>
                    <Badge className=' text-[#7209b7]  font-bold' variant="secondary"> Part Time </Badge>
                    <Badge className='text-red-900 font-bold' variant="secondary"> 24 LPA </Badge>
                </div>

                <div className='flex items-center gap-4 mt-4'>
                    <Button onClick={() => navigate(`/job-description/${jobId}`)} variant="outline">Details</Button>
                    <Button variant="outline" className="bg-[#7209b7] text-[white]">Save for later</Button>
                </div>
            </div>
        </>
    );
};

export default JobCard;