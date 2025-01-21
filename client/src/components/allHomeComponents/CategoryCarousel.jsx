import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]



const CategoryCarousel = () => {

    return (

        <>
            <div className='mt-6'>
                <div className='main-container'>

                    <Carousel className='w-[40%] sm:w-full max-w-xl mx-auto my-20'>
                        <CarouselContent>

                            {
                                category.map((cat, i) => (
                                    <CarouselItem className='sm:basis-1/2 lg:basis-1/3' key={i}>
                                        <Button variant="outline" className='rounded-full'>
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