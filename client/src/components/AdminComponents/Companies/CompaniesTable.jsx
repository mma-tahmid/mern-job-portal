import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit2, MoreHorizontal } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {

    const navigate = useNavigate();

    const { allCompanies, searchCompanyByText } = useSelector((state) => state.companyslc)

    const [filterCompany, setFilterCompany] = useState(allCompanies)


    useEffect(() => {

        const filteredCompany = allCompanies.length >= 0 && allCompanies.filter((company) => {
            if (!searchCompanyByText) {
                return true
            };
            return company?.companyName?.toLowerCase().includes(searchCompanyByText.toLowerCase());
        });

        setFilterCompany(filteredCompany)

    }, [allCompanies, searchCompanyByText])


    return (

        <>
            <Table>
                <TableCaption> List of Newly Recent Registered Companies </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead> Logo </TableHead>
                        <TableHead> Name </TableHead>
                        <TableHead> Date </TableHead>
                        <TableHead className='text-right'> Action </TableHead>
                    </TableRow>
                </TableHeader>

                {
                    filterCompany?.length <= 0 ? (<span> No Comapnies Found </span>) : (

                        filterCompany?.map((item, i) => (

                            <TableBody key={i}>
                                < TableCell >
                                    <Avatar>
                                        <AvatarImage src={item.logo} />
                                    </Avatar>
                                </TableCell>

                                <TableCell>{item.companyName}</TableCell>
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


                    )}

            </Table >
        </>
    );
};

export default CompaniesTable;