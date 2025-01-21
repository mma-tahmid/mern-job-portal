import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';

const AppliedJobTable = () => {

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
                        [1, 2, 3, 4].map((items, i) => (
                            <TableRow key={i}>

                                <TableCell> 21-01-2025</TableCell>
                                <TableCell> Frontend Developer</TableCell>
                                <TableCell> Google</TableCell>
                                <TableCell><Badge>Selected</Badge></TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>

            </Table>
        </>
    );
};

export default AppliedJobTable;