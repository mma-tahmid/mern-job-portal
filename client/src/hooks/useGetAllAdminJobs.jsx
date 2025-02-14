
import { SetAllAdminJobs } from '@/react-redux/slice/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {

    const dispatch = useDispatch();

    const fetchAllAdminJobs = async () => {

        try {
            const response = await axios.get("/api/v8/job/get-admin-jobs", { withCredentials: true })
            if (response.data.success) {
                dispatch(SetAllAdminJobs(response.data.output))
            }
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllAdminJobs()
    }, [])


};

export default useGetAllAdminJobs;