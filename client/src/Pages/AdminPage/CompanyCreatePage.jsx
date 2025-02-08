import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SetSingleCompany } from '@/react-redux/slice/companySlice';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CompanyCreatePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [companyName, setCompanyName] = useState();


    const registerCompany = async () => {

        try {
            const response = await axios.post("/api/v8/company/create-company", { companyName }, { withCredentials: true })

            if (response?.data?.success) {
                dispatch(SetSingleCompany(response.data.output))
                const companyId = response?.data?.output?._id
                navigate(`/admin/companies/${companyId}`)
                toast.success(response.data.message, { position: "bottom-left" })
            }

            else {
                toast.error(response.data.message, { position: "bottom-left" })
            }
        }

        catch (error) {
            console.log(error)
            toast.error(error.response.data.message, { position: "bottom-left" })

        }

    }

    return (

        <>
            <Navbar />

            <div className="mt-5">
                <div className='main-container'>

                    <div className='my-10'>
                        <h1 className='font-bold text-2xl'>Your Company Name</h1>
                        <p className='text-gray-500'> What would you like to give your company name? You can change this later.    </p>
                    </div>

                    <div>
                        <Label> Company Name</Label>
                        <Input
                            type="text"
                            placeholder="Google"
                            className='my-2'
                            onChange={(event) => setCompanyName(event.target.value)}
                        />
                    </div>

                    <div className='flex items-center gap-2 my-10'>
                        <Button onClick={() => navigate("/admin/companies/")} >Cancel</Button>
                        <Button onClick={registerCompany} variant='outline' >Continue</Button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CompanyCreatePage;