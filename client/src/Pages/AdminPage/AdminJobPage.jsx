import AdminJobsTable from '@/components/AdminComponents/Job/AdminJobsTable';
import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
import { SetSearchJobByText } from '@/react-redux/slice/jobSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const AdminJobPage = () => {

    useGetAllAdminJobs();

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [input, setInput] = useState("")

    useEffect(() => {
        dispatch(SetSearchJobByText(input))
    }, [input])

    return (

        <>
            <Navbar />

            <div className="mt-3">
                <div className='main-container'>

                    <div className='flex items-center justify-between mb-6 '>
                        <Input
                            className='w-fit'
                            placeholder="Filter by Name or Role"
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <Button onClick={() => navigate('/admin/jobs/create')}>Create New Jobs</Button>
                    </div>

                    <AdminJobsTable />

                </div>

            </div>
        </>

    );
};

export default AdminJobPage;