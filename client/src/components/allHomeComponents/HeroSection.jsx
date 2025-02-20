import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { SetSearchedQuery } from '@/react-redux/slice/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const [query, setQuery] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(SetSearchedQuery(query));
        navigate("/browse")
    }

    return (

        <>
            <div className='mt-6'>
                <div className='main-container'>

                    <div className='text-center'>
                        <span className='px-4 py-3 rounded-full bg-gray-100 text-[#f83002] text-2xl font-medium'> Leading Platform for Job Hunting  </span>
                        <h1 className=' mt-10 text-5xl font-bold'> Find, apply & <br /> Land your <span className='text-[#6a38c2]'>Ideal job</span></h1>
                        <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati dolorem recusandae perspiciatis sed cumque pariatur tenetur nam neque eligendi.</p>
                    </div>

                    {/* Search Field */}
                    <div className='mt-7 flex items-center gap-4 w-[40%] mx-auto shadow-lg border border-gray-200 rounded-full pl-6'>


                        <input
                            type="text"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='Search Your Jobs'
                            className='outline-none border-none w-full'
                        />

                        <Button onClick={searchJobHandler} className='rounded-r-full  bg-[#6A32C2]'>
                            <Search className='h-5 w-5' />
                        </Button>



                    </div>

                </div>
            </div>

        </>
    );
};

export default HeroSection;