import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit2, MoreHorizontal } from 'lucide-react';
import React from 'react';

const CompaniesTable = () => {

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

                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </Avatar>
                    </TableCell>

                    <TableCell>Google</TableCell>
                    <TableCell>18-07-2024</TableCell>
                    <TableCell className='text-right cursor-pointer'>
                        <Popover>
                            <PopoverTrigger> <MoreHorizontal /> </PopoverTrigger>
                            <PopoverContent className='w-32'>
                                <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                    <Edit2 className='w-4 ' />
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>

                </TableBody>

            </Table>
        </>
    );
};

export default CompaniesTable;