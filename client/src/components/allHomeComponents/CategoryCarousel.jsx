import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetSearchedQuery } from '@/react-redux/slice/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]



const CategoryCarousel = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(SetSearchedQuery(query));
        navigate("/browse")
    }

    return (

        <>
            <div className='mt-6'>
                <div className='main-container'>

                    <Carousel className='w-[40%] sm:w-full max-w-xl mx-auto my-20'>
                        <CarouselContent>

                            {
                                category.map((cat, i) => (
                                    <CarouselItem className='sm:basis-1/2 lg:basis-1/3' key={i}>
                                        <Button onClick={() => searchJobHandler(cat)} variant="outline" className='rounded-full'>
                                            {cat}
                                        </Button>
                                    </CarouselItem>
                                ))
                            }


                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />

                    </Carousel>

                </div>
            </div>

        </>
    );
};

export default CategoryCarousel;