import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {


    const [input, setInput] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        role: "",
        file: ""
    })

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }
    //
    const submitHandler = async (event) => {
        event.preventDefault()
        // console.log(input)
        const formData = new FormData(); // use FormData() for image

        formData.append("fullName", input.fullName)
        formData.append("email", input.email)
        formData.append("password", input.password)
        formData.append("phone", input.phone)
        formData.append("role", input.role)
        if (input.file) {
            formData.append("file", input.file)
        }

        try {

            const response = await axios.post("/api/v8/user-auth/registration", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true

            })

        }
        catch (error) {

        }

    }

    return (

        <>
            <Navbar />

            <div className='main-container flex items-center justify-center'>

                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-sm p-4 my-4'>

                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>

                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            name="fullName"
                            onChange={changeEventHandler}
                            value={input.fullName}
                            placeholder="Alex hales"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={changeEventHandler}
                            value={input.email}
                            placeholder="alex@gmail.com"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            onChange={changeEventHandler}
                            value={input.password}
                            placeholder="axf134"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            name="phone"
                            onChange={changeEventHandler}
                            value={input.phone}
                            placeholder="01728345789"
                        />
                    </div>


                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">

                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>

                            </div>
                            <div className="flex items-center space-x-2">

                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Recruiter</Label>


                            </div>

                        </RadioGroup>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Label> Profile </Label>
                        <Input
                            accept="image/*"
                            type="file"
                            onChange={changeFileHandler}
                            className="cursor-pointer"
                        />
                    </div>

                    <Button type="submit" className="w-full my-4 uppercase"> Sign Up </Button>
                    <span className='text-sm'>Already have an account? <Link className='text-blue-900' to="/login"> Login </Link></span>


                </form >
            </div >
        </>
    );
};

export default RegisterPage;