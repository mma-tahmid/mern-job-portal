import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { SetAuthUser } from '@/react-redux/slice/userSlice';

const UpdateProfileDialog = ({ openModal, setOpenModal }) => {

    const [loading, setLoading] = useState(false)

    const { currentUser } = useSelector((state) => state.userAuth)

    const [input, setInput] = useState({
        fullName: currentUser?.fullName,
        email: currentUser?.email,
        phone: currentUser?.phone,
        bio: currentUser?.profile?.bio,
        skills: currentUser?.profile?.skills?.map(skill => skill),
        file: currentUser?.profile?.resume,
    })


    const changeEventHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const fileChangeHandeler = (event) => {
        const fille = event.target.files?.[0] // input type file and this property is files
        setInput({ ...input, file: fille })
    }


    const dispatch = useDispatch()

    //const { loading } = useSelector((state) => state.userAuth)

    const submitHandeler = async (event) => {

        event.preventDefault();

        const formData = new FormData();
        formData.append("fullName", input.fullName) //FormData.append("key", value)
        formData.append("email", input.email)
        formData.append("phone", input.phone)
        formData.append("bio", input.bio)
        formData.append("skills", input.skills)
        if (input.file) {
            formData.append("file", input.file)
        }
        try {

            //dispatch(StartLoading())

            setLoading(true)

            const response = await axios.put(`/api/v8/user-auth/update-profile/${currentUser._id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })

            if (response.data.success) {

                dispatch(SetAuthUser(response.data.output))
                toast.success(response.data.message, { position: "bottom-left" }) // toast use for notifications 
            }
            else {
                toast.error(response.data.message, { position: "bottom-left" })  // error of input field validation & existing email & existing user name 
            }

        }
        catch (error) {
            //console.log(error)
            toast.error(error, "Some thing went Wrong", { position: "bottom-left" })


        }

        finally {
            setLoading(false)
        }
        // finally {
        //     dispatch(EndLoading())
        // }

        setOpenModal(false)


    }

    return (

        <>

            <Dialog open={openModal}>

                <DialogContent onInteractOutside={() => setOpenModal(false)}>

                    <DialogHeader>
                        <DialogTitle> Update Profile </DialogTitle>

                    </DialogHeader>

                    <form onSubmit={submitHandeler}>
                        <div className='grid gap-4 py-4'>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="name" className='text-right'> Full Name</Label>
                                <Input
                                    name="fullName"
                                    type="text"
                                    value={input.fullName}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className='text-right'> Email </Label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number" className='text-right'> Phone Number </Label>
                                <Input

                                    name="phone"
                                    value={input.phone}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className='text-right'> Bio </Label>
                                <Input

                                    name="bio"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className='text-right'> Skills </Label>
                                <Input
                                    name="skills"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className='text-right'> Resume </Label>
                                <Input
                                    name="file"
                                    type="file"
                                    accept="application/pdf"
                                    onChange={fileChangeHandeler}
                                    className="col-span-3 cursor-pointer"
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            {
                                loading ? (<Button className="w-full my-4"> Loading... </Button>) :
                                    (<Button type="submit" className="w-full my-4"> Update </Button>)
                            }

                        </DialogFooter>

                    </form>

                </DialogContent>
            </Dialog>

        </>
    );
};

export default UpdateProfileDialog;