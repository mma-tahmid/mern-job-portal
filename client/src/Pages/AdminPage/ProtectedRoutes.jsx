import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const { currentUser } = useSelector((state) => state.userAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser === null || currentUser.role !== "recruiter") {
            navigate("/")
        }

    }, []);

    return (
        <>
            {children}
        </>

    )

};

export default ProtectedRoutes;