import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SetAuthUser } from '@/react-redux/slice/userSlice';
import { toast } from 'sonner';

const Navbar = () => {

    //const user = true;

    const { currentUser } = useSelector((state) => state.userAuth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandler = async () => {

        try {

            const response = await axios.get("/api/v8/user-auth/logout")

            if (response.data.success) {
                dispatch(SetAuthUser(null))

                navigate("/")
                toast.success(response.data.message, { position: "bottom-left" })
            }

        }

        catch (error) {
            console.log(error)
            toast.error(error.response.data.message, { position: "bottom-left" }) // Show Error in LogOut from Backend
        }
    }


    return (

        <>

            <div className='bg-white'>

                <div className='main-container h-16 flex items-center justify-between '>

                    <div>
                        <h1 className='text-2xl font-bold'> Job <span className='text-[#F83002]'> Scape </span> </h1>
                    </div>

                    <div className='flex items-center gap-12'>
                        <ul className='flex font-medium items-center justify-between gap-5'>

                            {
                                currentUser && currentUser.role === 'recruiter' ? (
                                    <>
                                        <li> <Link to="/admin/companies"> Companies </Link> </li>
                                        <li> <Link to="/admin/jobs"> Jobs </Link> </li>
                                    </>
                                ) :
                                    (
                                        <>
                                            <li> <Link to="/"> Home </Link> </li>
                                            <li> <Link to="/jobs"> Jobs </Link> </li>
                                            <li> <Link to="/browse"> Browse </Link> </li>
                                        </>
                                    )
                            }



                        </ul>

                        {
                            !currentUser ?
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
                                                <AvatarImage src={currentUser?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar>

                                        </PopoverTrigger>

                                        <PopoverContent className='w-80'>
                                            <div className='flex items-center gap-6'>
                                                <Avatar className="cursor-pointer">
                                                    <AvatarImage src={currentUser?.profile?.profilePhoto} alt="@shadcn" />
                                                </Avatar>

                                                <div>
                                                    <h4 className='font-medium'> {currentUser?.fullName} </h4>
                                                    <p className='text-sm text-muted-foreground'> {currentUser?.profile?.bio} </p>
                                                </div>

                                            </div>

                                            <div className='mt-3 flex flex-col  text-gray-500'>

                                                {
                                                    currentUser && currentUser.role === "student" && (
                                                        <div className='flex gap-x-5 items-center'>
                                                            <User2 />
                                                            <Button className='outline-none border-none ' variant="link"> <Link to="/profile"> View Profile</Link> </Button>
                                                        </div>
                                                    )
                                                }



                                                <div className='flex gap-x-5 items-center'>
                                                    <LogOut />
                                                    <Button onClick={logOutHandler} className='outline-none border-none' variant="link"> Log Out</Button>
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