import CompaniesTable from '@/components/AdminComponents/Companies/CompaniesTable';
import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompaniesPage = () => {

    const navigate = useNavigate()


    return (

        <>
            <Navbar />

            <div className="mt-3">
                <div className='main-container'>

                    <div className='flex items-center justify-between mb-6 '>
                        <Input
                            className='w-fit'
                            placeholder="Filter by Name"
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