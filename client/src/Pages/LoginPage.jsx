import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { EndLoading, SetAuthUser, StartLoading } from '@/react-redux/slice/userSlice';

const LoginPage = () => {

    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    })

    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    // Redux
    const dispatch = useDispatch()

    const { loading } = useSelector((state) => state.userAuth)


    const submitHandler = async (event) => {

        event.preventDefault()
        // console.log(input)

        try {
            dispatch(StartLoading())

            const response = await axios.post("/api/v8/user-auth/login", input)

            if (response.data.success) {

                dispatch(SetAuthUser(response.data.output))
                navigate("/")
                toast.success(response.data.message, { position: "bottom-left" }) // toast use for notifications 
            }
            else {
                toast.error(response.data.message, { position: "bottom-left" })
            }

        }
        catch (error) {
            //console.log(error)
            // toast.error("Some thing went Wrong", { position: "bottom-left" })
            //toast.error(error.message, { position: "bottom-left" }) // perfect-this one show server error (Error: Request failed with status code 500 when internet is off )
            toast.error(error.response.data.message, { position: "bottom-left" }) // show: Error in Login from Backend
            
        }
        finally {
            dispatch(EndLoading())
        }

    }

    return (

        <>
            <Navbar />

            <div className='main-container flex items-center justify-center'>

                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-sm p-4 my-4'>

                    <h1 className='font-bold text-xl mb-5'>Login</h1>

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


                    {
                        loading ? (<Button type="submit" className="w-full my-4"> Loading... </Button>) :
                            (<Button type="submit" className="w-full my-4 uppercase"> Login </Button>)
                    }



                    <span className='text-sm'>Do not have an account? <Link className='text-blue-900' to="/signup"> Sign-up </Link></span>


                </form >
            </div >
        </>
    );
};

export default LoginPage;