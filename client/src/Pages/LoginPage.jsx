import React from 'react';
import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { Link } from 'react-router-dom';
const LoginPage = () => {

    return (

        <>
            <Navbar />

            <div className='main-container flex items-center justify-center'>

                <form action="" className='w-1/2 border border-gray-200 rounded-sm p-4 my-4'>

                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="alex@gmail.com"
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="axf134"
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">

                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>

                            </div>

                            <div className="flex items-center space-x-2">

                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Recruiter</Label>


                            </div>

                        </RadioGroup>
                    </div>

                    

                    <Button type="submit" className="w-full my-4 uppercase"> Login </Button>
                    <span className='text-sm'>Do not have an account? <Link className='text-blue-900' to="/signup"> Sign-up </Link></span>


                </form >
            </div >
        </>
    );
};

export default LoginPage;