import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetAllAppliedJobs } from '@/react-redux/slice/jobSlice';

const useGetAllAppliedJobs = () => {

    const dispatch = useDispatch();

    //// one student je koita job a apply korbe tar list

    const fetchAllAppliedJobs = async () => {

        try {
            const response = await axios.get("/api/v8/application/get-all-applied-jobs", { withCredentials: true })
            //console.log(response.data.output)
            // if (response.data.success) {
            dispatch(SetAllAppliedJobs(response.data.output))
            // }
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllAppliedJobs()
    }, [])

};

export default useGetAllAppliedJobs;

