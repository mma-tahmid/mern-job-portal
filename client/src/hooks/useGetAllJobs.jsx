import { SetAllJobs } from '@/react-redux/slice/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const useGetAllJobs = () => {

    const dispatch = useDispatch();

    const { searchedQuery } = useSelector((state) => state.jobslc)



    const fetchAllJobs = async () => {

        try {
            const response = await axios.get(`/api/v8/job/all-jobs?keyword=${searchedQuery}`)
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