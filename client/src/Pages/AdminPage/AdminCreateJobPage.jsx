import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


//const companyArray = [];

const AdminCreateJobPage = () => {

    const [input, setInput] = useState({
        // title: "",
        jobTitle: "",
        description: "",
        requirements: "",
        salary: "",
        // location: "",
        joblocation: "",
        jobType: "",
        // experience: "",
        experienceLevel: "",
        Vacancies: 0,
        // companyId: ""
        companys: ""
    })

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const { allCompanies } = useSelector((state) => state.companyslc)

    const changeInputEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    };
    //console.log(input)


    const selectChangeHandeler = (value) => {
        const selectedCompany = allCompanies.find((item) => item.companyName.toLowerCase() === value)

        setInput({ ...input, companys: selectedCompany._id })
    }


    const submitHandeler = async (e) => {
        e.preventDefault()
        //console.log(input)

        try {
            setLoading(true)

            const response = await axios.post("/api/v8/job/create-job", input, { withCredentials: true })

            if (response.data.success) {

                navigate("/admin/jobs")
                toast.success(response.data.message, { position: "bottom-left" }) // toast use for notifications 
            }
            else {
                toast.error(response.data.message, { position: "bottom-left" })  // error of input field validation & existing email & existing user name 
            }
        }

        catch (error) {
            toast.error(error.response.data.message, { position: "bottom-left" })
        }
        finally {
            setLoading(false)
        }
    }


    return (

        <>
            <Navbar />

            <div className='mt-6'>

                <div className='main-container flex justify-center items-center'>

                    <form onSubmit={submitHandeler} className=' p-7 border border-gray-200 shadow-lg rounded-md'>

                        <div className='grid grid-cols-2 gap-4'>


                            <div className=''>
                                <Label>Title</Label>
                                <Input
                                    type="text"
                                    name="jobTitle"
                                    value={input.jobTitle}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 w-[300px] "
                                />
                            </div>

                            <div>
                                <Label>Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    value={input.description}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 w-[300px]"
                                />
                            </div>

                            <div>
                                <Label>Requirements</Label>
                                <Input
                                    type="text"
                                    name="requirements"
                                    value={input.requirements}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                />
                            </div>

                            <div>
                                <Label>salary</Label>
                                <Input
                                    type="text"
                                    name="salary"
                                    value={input.salary}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                />
                            </div>

                            <div>
                                <Label>Location</Label>
                                <Input
                                    type="text"
                                    name="joblocation"
                                    value={input.joblocation}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                />
                            </div>

                            <div>
                                <Label>jobType</Label>
                                <Input
                                    type="text"
                                    name="jobType"
                                    value={input.jobType}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                />
                            </div>



                            <div>
                                <Label>experience</Label>
                                <Input
                                    type="text"
                                    name="experienceLevel"
                                    value={input.experienceLevel}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                />
                            </div>

                            <div>
                                <Label>Vacancies</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    name="Vacancies"
                                    value={input.Vacancies}
                                    onChange={changeInputEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                />
                            </div>


                            <div>
                                {
                                    allCompanies.length >= 0 && (

                                        <Select onValueChange={selectChangeHandeler}>
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder="Select a Company"
                                                />
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectGroup>
                                                    {

                                                        allCompanies?.map((item, i) => {
                                                            const companyNames = item?.companyName?.trim(); // Trim whitespace and check validity
                                                            if (!companyNames) return null; // Skip invalid companies with no name
                                                            return (
                                                                <SelectItem value={companyNames?.toLowerCase()} key={i}>
                                                                    {companyNames}
                                                                    {/* {item?.companyName} */}
                                                                </SelectItem>
                                                            )
                                                        })

                                                        // allCompanies?.map((item, i) => {

                                                        //     <SelectItem value={item?.companyName?.toLowerCase()} key={i}>
                                                        //         {item?.companyName}
                                                        //     </SelectItem>
                                                        // })
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )
                                }
                            </div>

                        </div>

                        {
                            loading ? (<Button type="submit" className="mt-3 w-full"> Loading... </Button>) :
                                (<Button type="submit" className="w-full my-4 uppercase"> Create New Job </Button>)
                        }


                        {
                            allCompanies.length === 0 && <p className='text-xs text-red-600 text-center font-bold mt-4'>Please Register a Company before creating a job</p>
                        }

                    </form>

                </div>

            </div>
        </>
    );
};

export default AdminCreateJobPage;