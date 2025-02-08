import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyCreatePage = () => {

    const navigate = useNavigate();

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
                        />
                    </div>

                    <div className='flex items-center gap-2 my-10'>
                        <Button onClick={() => navigate("/admin/companies/")} >Cancel</Button>
                        <Button variant='outline'>Continue</Button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CompanyCreatePage;