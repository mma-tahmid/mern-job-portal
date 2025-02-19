import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { useSelector } from 'react-redux';
import { split } from 'postcss/lib/list';

const AppliedJobTable = () => {

    const { allAppliedJobs } = useSelector((state) => state.jobslc)

    return (

        <>

            <Table>
                <TableCaption> A List of Your Applied job </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead> Applied Date </TableHead>
                        <TableHead> Job Role </TableHead>
                        <TableHead> Company </TableHead>
                        <TableHead> Status </TableHead>

                    </TableRow>
                </TableHeader>

                <TableBody>

                    {
                        allAppliedJobs.length <= 0 ? <span>You have not applied any job yet</span> : allAppliedJobs.map((items, i) => (
                            <TableRow key={i}>

                                <TableCell> {items?.createdAt.split("T")[0]} </TableCell>
                                <TableCell> {items?.jobs?.jobTitle} </TableCell>
                                <TableCell> {items?.jobs?.companys?.companyName}</TableCell>
                                <TableCell><Badge className={`${items?.status === "Rejected" ? 'bg-red-400' : items.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{items?.status.toUpperCase()}</Badge></TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>

            </Table>
        </>
    );
};

export default AppliedJobTable;