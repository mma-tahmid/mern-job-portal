import AppliedJobTable from '@/components/allProfileComponent/AppliedJobTable';
import Navbar from '@/components/shared/Navbar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Contact, Mail, Pen } from 'lucide-react';
import React from 'react';

const skillss = ["html", "css", "react js", "javascript", "Express js"]

const ProfilePage = () => {

    const isResume = true;

    return (

        <>

            <Navbar />

            <div className='mt-7'>
                <div className='main-container '>

                    <div className='bg-white border border-gray-200 rounded-2xl p-8'>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="profile-image" />
                                </Avatar>

                                <div>
                                    <h1 className='font-medium text-xl'>Full Name </h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur!</p>
                                </div>
                            </div>

                            <Button className='text-right' variant="outline"> <Pen /> </Button>
                        </div>

                        <div className='mt-7'>

                            <div className='flex items-center gap-3 my-3'>
                                <Mail />
                                <span>tamim@gmail.com</span>
                            </div>

                            <div className='flex items-center gap-3 my-3'>
                                <Contact />
                                <span>019892346874</span>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold'>Skills</h1>
                            <div className='flex items-center gap-3 uppercase mt-4'>
                                {
                                    skillss.length !== 0 ? (
                                        skillss.map((item, i) => (
                                            <Badge key={i}> {item} </Badge>
                                        ))
                                    ) :

                                        (
                                            <span>N/A</span>
                                        )

                                }
                            </div>
                        </div>

                        <div className='grid w-full max-w-sm items-center gap-1.5 mt-6'>
                            <Label className='text-md font-bold'> Resume </Label>
                            {
                                isResume ? (<a href="https://www.youtube.com/" target='blank' className='text-blue-800 font-semibold w-full cursor-pointer'> Tamim Mern Stack </a>) : (
                                    <span>N/A</span>
                                )
                            }
                        </div>
                    </div>


                    {/* Applied Job Table */}
                    <div className=' bg-white rounded-2xl mt-10'>
                        <h1 className='font-bold text-2xl text-center'>All Applied Jobs </h1>

                        <AppliedJobTable />

                    </div>
                </div>

            </div>

        </>
    );
};

export default ProfilePage;