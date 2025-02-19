import AdminApplicantsTable from '@/components/AdminComponents/Job/AdminApplicantsTable';
import Navbar from '@/components/shared/Navbar';
import { SetAllapplicants } from '@/react-redux/slice/applicationSlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';



const AdminApplicantPage = () => {

    const params = useParams();
    const jobId = params.id

    const dispatch = useDispatch()
    // Get all applicant(All Applied User) According to one single job


    const { allApplicants } = useSelector((state) => state.applicationslc)


    const fetchAllApplicants = async () => {

        try {
            const response = await axios.get(`/api/v8/application/${jobId}/get-all-applicants`, { withCredentials: true })
            //if (response.data.success) {
            // Error: Cannot read properties of undefined (reading 'length') (show this error for if statement)
            //console.log(response.data.output)
            dispatch(SetAllapplicants(response.data.output))
            // }
        }

        catch (error) {
            console.log(error)
            toast.error(error.response.data.message, { position: "bottom-left" }) // show:   Error in Getting Single Job from Backend
        }
    }


    useEffect(() => {
        fetchAllApplicants()
    }, [])


    return (

        <>
            <Navbar />

            <div className='mt-6'>
                <div className="main-container">

                    <h1 className='text-2xl font-bold my-5'>Applicants: {allApplicants.applications.length} </h1>

                    {/* akta job a koto jon user apply korese tar list */}

                    <AdminApplicantsTable />

                </div>
            </div>
        </>
    );
};

export default AdminApplicantPage;