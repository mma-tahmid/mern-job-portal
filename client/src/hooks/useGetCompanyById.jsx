import { SetSingleCompany } from '@/react-redux/slice/companySlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {

    const dispatch = useDispatch(); 

    const fetchSingleCompany = async () => {

        try {
            const response = await axios.get(`/api/v8/company/get-company-by-id/${companyId}`, { withCredentials: true })
            if (response.data.success) {
                dispatch(SetSingleCompany(response.data.output))
            }
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSingleCompany()
    }, [companyId, dispatch])
};

export default useGetCompanyById;