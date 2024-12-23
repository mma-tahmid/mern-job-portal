import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';

const Navbar = () => {

    const user = false;

    return (

        <>

            <div className='bg-white'>

                <div className='main-container h-16 flex items-center justify-between '>

                    <div>
                        <h1 className='text-2xl font-bold'> Job <span className='text-[#F83002]'> Scape </span> </h1>
                    </div>

                    <div className='flex items-center gap-12'>
                        <ul className='flex font-medium items-center justify-between gap-5'>
                            <li> <Link> Home </Link> </li>
                            <li> <Link> Jobs </Link> </li>
                            <li> <Link> Browse </Link> </li>
                        </ul>

                        {
                            !user ?
                                (
                                    <div className=' flex items-center gap-x-2'>
                                        <Link to='/login'> <Button variant="outline">Log in</Button></Link>
                                        <Link to='/signup'>  <Button variant="outline">Sign Up</Button></Link>
                                    </div>

                                ) :
                                (
                                    <Popover>
                                        <PopoverTrigger asChild>

                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            </Avatar>

                                        </PopoverTrigger>

                                        <PopoverContent className='w-80'>
                                            <div className='flex items-center gap-6'>
                                                <Avatar className="cursor-pointer">
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                </Avatar>

                                                <div>
                                                    <h4 className='font-medium'> TAHMID </h4>
                                                    <p className='text-sm text-muted-foreground'> Lorem ipsum dolor sit amet</p>
                                                </div>

                                            </div>

                                            <div className='mt-3 flex flex-col  text-gray-500'>
                                                <div className='flex gap-x-5 items-center'>
                                                    <User2 />
                                                    <Button className='outline-none border-none ' variant="link"> View Profile</Button>
                                                </div>

                                                <div className='flex gap-x-5 items-center'>
                                                    <LogOut />
                                                    <Button className='outline-none border-none' variant="link"> Log Out</Button>
                                                </div>
                                            </div>
                                        </PopoverContent>

                                    </Popover>
                                )
                        }



                    </div>


                </div>

            </div>

        </>


    );
};

export default Navbar;