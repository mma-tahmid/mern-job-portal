import { SetAllCompanies } from '@/react-redux/slice/companySlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {


    const dispatch = useDispatch();

    const fetchAllCompany = async () => {

        try {
            const response = await axios.get("/api/v8/company/get-all-company", { withCredentials: true })
            if (response.data.success) {
                dispatch(SetAllCompanies(response.data.output))
            }
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllCompany()
    }, [])
};



export default useGetAllCompanies;