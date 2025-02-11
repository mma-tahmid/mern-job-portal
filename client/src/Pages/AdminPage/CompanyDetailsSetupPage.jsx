import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useGetCompanyById from '@/hooks/useGetCompanyById';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const CompanyDetailsSetupPage = () => {


    const params = useParams();
    const cId = params.id
    useGetCompanyById(cId)

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);


    const [input, setInput] = useState({
        companyName: "",
        description: "",
        companyWebsite: "",
        companyLocation: "",
        file: null, // logo
    })

    const { singleCompany } = useSelector((state) => state.companyslc)

    const changeInputEventHandeler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }


    // File Handeler
    const changeFileHandeler = (event) => {
        const fille = event.target.files?.[0];
        setInput({ ...input, file: fille })
    }


    const SubmitHandeler = async (event) => {
        event.preventDefault()
        //console.log(input)

        const formData = new FormData()

        //formData.append("key", value); // key = objectProperty

        formData.append("companyName", input.companyName)
        formData.append("description", input.description)
        formData.append("companyWebsite", input.companyWebsite)
        formData.append("companyLocation", input.companyLocation)

        if (input.file) {
            formData.append("file", input.file)

        }

        try {

            setLoading(true)

            const response = await axios.put(`/api/v8/company/update-company/${cId}`, formData, {
                headers: {
                    "Content-Type": 'multopart/form-data'
                },

                withCredentials: true
            })

            if (response.data.success) {

                toast.success(response.data.message, { position: "bottom-left" })
                navigate("/admin/companies")
            }

        }

        catch (error) {
            console.log(error)
            toast.error(error.response.data.message, { position: "bottom-left" })
        }
        finally {
            setLoading(false)
        }

    }


    useEffect(() => {
        setInput({
            companyName: singleCompany.companyName || "",
            description: singleCompany.description || "",
            companyWebsite: singleCompany.companyWebsite || "",
            companyLocation: singleCompany.companyLocation || "",
            file: singleCompany.file || null, // logo
        })
    }, [singleCompany])



    return (
        <>
            <Navbar />

            <div className='mt-6'>
                <div className="main-container">

                    <form onSubmit={SubmitHandeler}>

                        <div className='flex items-center gap-5 p-8'>
                            <Button onClick={() => navigate("/admin/companies")} variant="outline" className='flex items-center gap-3 text-gray-500 font-semibold '>
                                <ArrowLeft />
                                <span>Back</span>
                            </Button>
                            <h1 className='font-bold text-xl'> Company Setup</h1>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-4'>

                            <div >
                                <Label>Company Name</Label>
                                <Input
                                    type="text"
                                    name="companyName"
                                    onChange={changeInputEventHandeler}
                                    value={input.companyName}
                                />
                            </div>

                            <div >
                                <Label>Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    onChange={changeInputEventHandeler}
                                    value={input.description}
                                />
                            </div>
                            <div >
                                <Label>Website</Label>
                                <Input
                                    type="text"
                                    name="companyWebsite"
                                    onChange={changeInputEventHandeler}
                                    value={input.companyWebsite}
                                />
                            </div>

                            <div >
                                <Label>Location</Label>
                                <Input
                                    type="text"
                                    name="companyLocation"
                                    onChange={changeInputEventHandeler}
                                    value={input.companyLocation}
                                />
                            </div>

                            <div  >
                                <Label>Logo</Label>
                                <Input
                                    className='cursor-pointer'
                                    type="file"
                                    accept="image/*" // * means -----> any type of image format(jpg, png etc) 
                                    onChange={changeFileHandeler}

                                />
                            </div>
                        </div>

                        <div className=' grid place-items-center mt-8'>
                            {
                                loading ? (<Button type="submit" className='uppercase w-1/2'> Loding.... </Button>) :
                                    (<Button type="submit" className='uppercase w-1/2'> Update </Button>)
                            }


                        </div>
                    </form>

                </div >
            </div >
        </>
    );
};

export default CompanyDetailsSetupPage;