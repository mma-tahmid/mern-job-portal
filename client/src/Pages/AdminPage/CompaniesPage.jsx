import CompaniesTable from '@/components/AdminComponents/Companies/CompaniesTable';
import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { SetSearchCompanyByText } from '@/react-redux/slice/companySlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesPage = () => {

    useGetAllCompanies();

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [input, setInput] = useState("")

    useEffect(() => {
        dispatch(SetSearchCompanyByText(input))
    }, [input])

    return (

        <>
            <Navbar />

            <div className="mt-3">
                <div className='main-container'>

                    <div className='flex items-center justify-between mb-6 '>
                        <Input
                            className='w-fit'
                            placeholder="Filter by Name"
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <Button onClick={() => navigate('/admin/companies/create')}>New Company</Button>
                    </div>

                    <CompaniesTable />

                </div>

            </div>


        </>
    );
};

export default CompaniesPage;