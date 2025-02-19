import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';



const shortlistingStatus = ["Accepted", "Rejected"]

const AdminApplicantsTable = () => {

    const { allApplicants } = useSelector((state) => state.applicationslc)

    // updated Status


    //updated Status 
    const statusHandeler = async (status, applicationId) => {

        try {
            // axios.defaults.withCredentials = true;
            const response = await axios.put(`/api/v8/application/update-status/${applicationId}`, { status }, { withCredentials: true });

            if (response.data.success) {
                toast.success(response.data.message)
            }
        }

        catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    }




    return (

        <>
            <Table>
                <TableCaption> List of Recent Applied User</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead> Full Name </TableHead>
                        <TableHead> Email </TableHead>
                        <TableHead> Contact </TableHead>
                        <TableHead> Resume </TableHead>
                        <TableHead> Date </TableHead>
                        <TableHead className="text-right"> Action </TableHead>

                    </TableRow>
                </TableHeader>


                {
                    allApplicants && allApplicants?.applications?.map((item, i) => (

                        <TableBody key={i}>
                            <TableCell> {item?.applicant?.fullName} </TableCell>
                            <TableCell> {item?.applicant?.email} </TableCell>
                            <TableCell>  {item?.applicant?.phone} </TableCell>
                            <TableCell className='text-blue-700 cursor-pointer'> <a href={item?.applicant?.profile?.resume} target='blank'> {item?.applicant?.profile?.resumeOriginalName} </a> </TableCell>
                            <TableCell> {item?.applicant?.createdAt?.split("T")[0]} </TableCell>
                            <TableCell className=' flex items-center justify-end gap-4 cursor-pointer'>

                                {/* <div className='flex items-center gap-1 '> */}
                                {
                                    shortlistingStatus.map((statuss, i) => (


                                        <div onClick={() => statusHandeler(statuss, item?._id)} key={i} >
                                            <span className={`${statuss === "Accepted" ? "text-green-500" : "text-red-500"} font-bold`}> {statuss}</span>
                                        </div>

                                    ))
                                }
                                {/* </div> */}

                            </TableCell>
                        </TableBody>
                    ))
                }




            </Table>
        </>
    );
};

export default AdminApplicantsTable;