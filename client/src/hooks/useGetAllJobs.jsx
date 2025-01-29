import { SetAllJobs } from '@/react-redux/slice/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';



const useGetAllJobs = () => {

    const dispatch = useDispatch();

    const fetchAllJobs = async () => {

        try {
            const response = await axios.get("/api/v8/job/all-jobs")
            if (response.data.success) {
                dispatch(SetAllJobs(response.data.output))
            }
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllJobs()
    }, [])


};

export default useGetAllJobs;