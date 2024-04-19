import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const ComplexTable = () => {
  return (
    <div>
        <Table>
            <TableHead className='text-[#A3AED0] text-[12px] border-b'>
                <TableHeadCell className=' bg-transparent pt-[2px] pb-[3px] font-medium'>Name</TableHeadCell>
                <TableHeadCell className=' bg-transparent pt-[2px] pb-[3px] font-medium'>Status</TableHeadCell>
                <TableHeadCell className=' bg-transparent pt-[2px] pb-[3px] font-medium'>Date</TableHeadCell>
                <TableHeadCell className=' bg-transparent pt-[2px] pb-[3px] font-medium'>Progress</TableHeadCell>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674]'>Horizon UI PRO</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674]'>Horizon UI Free</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674]'>Marketplace</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674]'>Weekly Updates</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default ComplexTable;