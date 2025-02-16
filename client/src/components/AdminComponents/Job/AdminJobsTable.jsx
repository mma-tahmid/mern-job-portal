import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit2, MoreHorizontal } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = () => {

    const navigate = useNavigate();


    const { allAdminJobs, searchJobByText } = useSelector((state) => state.jobslc)

    const [filterJobs, setFilterJobs] = useState(allAdminJobs)


    useEffect(() => {


        if (!Array.isArray(allAdminJobs)) {
            setFilterJobs([]); // Ensure an empty array instead of undefined
            return;
        }

        const filteredJobs = allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true
            };
            return job?.jobTitle?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.companys?.companyName.toLowerCase().includes(searchJobByText.toLowerCase());
        });

        setFilterJobs(filteredJobs)



    }, [allAdminJobs, searchJobByText])

    return (

        <>
            <Table>
                <TableCaption> List of Newly Recent Posted Jobs </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead> Company Name </TableHead>
                        <TableHead> Role </TableHead>
                        <TableHead> Date </TableHead>
                        <TableHead className='text-right'> Action </TableHead>
                    </TableRow>
                </TableHeader>

                {

                    filterJobs?.map((item, i) => (

                        <TableBody key={i}>

                            <TableCell>{item?.companys?.companyName}</TableCell>
                            <TableCell>{item?.jobTitle}</TableCell>
                            <TableCell>{item.createdAt.split("T")[0]}</TableCell>
                            <TableCell className='text-right cursor-pointer'>
                                <Popover>
                                    <PopoverTrigger> <MoreHorizontal /> </PopoverTrigger>
                                    <PopoverContent className='w-32'>
                                        <div onClick={() => navigate(`/admin/companies/${item._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                            <Edit2 className='w-4 ' />
                                            <span>Edit</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableBody>
                    ))

                }

            </Table >
        </>
    );
};

export default AdminJobsTable;