import AppliedJobTable from '@/components/allProfileComponent/AppliedJobTable';
import UpdateProfileDialog from '@/components/allProfileComponent/UpdateProfileDialog';
import Navbar from '@/components/shared/Navbar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useGetAllAppliedJobs from '@/hooks/useGetAllAppliedJobs';
import { Contact, Mail, Pen } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

//const skillss = ["html", "css", "react js", "javascript", "Express js"]
const isResume = true;

const ProfilePage = () => {

    useGetAllAppliedJobs();

    // modal
    const [open, setOpen] = useState(false);

    const { currentUser } = useSelector((state) => state.userAuth)

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
                                    <h1 className='font-medium text-xl'>{currentUser?.fullName} </h1>
                                    <p>{currentUser?.profile?.bio}</p>
                                </div>
                            </div>

                            <Button onClick={() => setOpen(true)} className='text-right' variant="outline"> <Pen /> </Button>
                        </div>

                        <div className='mt-7'>

                            <div className='flex items-center gap-3 my-3'>
                                <Mail />
                                <span>{currentUser?.email}</span>
                            </div>

                            <div className='flex items-center gap-3 my-3'>
                                <Contact />
                                <span>{currentUser?.phone}</span>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold'>Skills</h1>
                            <div className='flex items-center gap-3 uppercase mt-4'>
                                {
                                    currentUser?.profile?.skills.length !== 0 ? (
                                        currentUser?.profile?.skills.map((item, i) => (
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
                                isResume ? (<a href={currentUser?.profile?.resume} target='blank' className='text-blue-800 font-semibold w-full cursor-pointer'> {currentUser?.profile?.resumeOriginalName} </a>) : (
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

                    <UpdateProfileDialog openModal={open} setOpenModal={setOpen} />

                </div>

            </div>

        </>
    );
};

export default ProfilePage;