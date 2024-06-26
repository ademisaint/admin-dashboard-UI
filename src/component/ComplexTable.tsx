import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const ComplexTable = () => {
  return (
    <div className='pt-[5px]'>
        <Table >
            <TableHead className='text-[#A3AED0] text-[12px] border-b'>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] pt-[2px] pb-[3px] font-medium'>Name</TableHeadCell>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] pt-[2px] pb-[3px] font-medium'>Status</TableHeadCell>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] pt-[2px] pb-[3px] font-medium'>Date</TableHeadCell>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] pt-[2px] pb-[3px] font-medium'>Progress</TableHeadCell>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell className='pt-[8px] pb-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Horizon UI PRO</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Approved</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>18 Apr 2021</TableCell>
                    <TableCell ><div className='h-[10px] w-[100px] bg-[#EFF4FB] rounded-full overflow-hidden'><div className='h-[100%] bg-[#4318FF] w-[80%] rounded-full'/></div></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Horizon UI Free</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Disabled</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>18 Apr 2021</TableCell>
                    <TableCell ><div className='h-[10px] w-[100px] bg-[#EFF4FB] rounded-full overflow-hidden'><div className='h-[100%] bg-[#4318FF] w-[40%] rounded-full'/></div></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Marketplace</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Error</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>20 May 2021</TableCell>
                    <TableCell ><div className='h-[10px] w-[100px] bg-[#EFF4FB] rounded-full overflow-hidden'><div className='h-[100%] bg-[#4318FF] w-[90%] rounded-full'/></div></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Weekly Updates</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>Approved</TableCell>
                    <TableCell className='py-[4px] text-[14px] font-bold text-[#2B3674] dark:text-[#fff]'>12 Jul 2021</TableCell>
                    <TableCell ><div className='h-[10px] w-[100px] bg-[#EFF4FB] rounded-full overflow-hidden'><div className='h-[100%] bg-[#4318FF] w-[50%] rounded-full'/></div></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default ComplexTable;