import React from 'react';
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const CheckTable = () => {
  return (
    <div>
        <Table className=''>
            <TableHead className='text-[#A3AED0] font-normal text-[12px]'>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] font-medium p1-[5px] px-0 pr-0'>Name</TableHeadCell>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] font-medium'></TableHeadCell>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] font-medium'>Progress</TableHeadCell>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] font-medium'>Quantity</TableHeadCell>
                <TableHeadCell className=' bg-transparent dark:bg-[#111C44] font-medium'>Date</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y text-[12px] font-bold text-[#2B3674] pt-2">
                <TableRow className="bg-white dark:bg-[#111C44] dark:border-gray-700 dark:text-[#fff] border-none">
                    <TableCell className="p-2 dark:bg-[#111C44] dark:border-white"><Checkbox /></TableCell>
                    <TableCell className="whitespace-nowrap text-[#2B3674] dark:text-white py-[2px] px-[20px]">
                    Horizon UI PRO
                    </TableCell>
                    <TableCell className='py-[2px] px-[20px]'>17.5%</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>2,458</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>24.Jan.2021</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:text-[#fff] dark:bg-[#111C44]">
                    <TableCell className="p-2 dark:bg-[#111C44] dark:border-white"><Checkbox /></TableCell>
                    <TableCell className="whitespace-nowrap text-[#2B3674] dark:text-white py-[2px] px-[20px]">Horizon UI Free</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>10.8%</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>1,485</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>12.Jun.2021</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:text-[#fff] dark:bg-[#111C44]">
                    <TableCell className="p-2 dark:bg-[#111C44] dark:border-white"><Checkbox /></TableCell>
                    <TableCell className="whitespace-nowrap text-[#2B3674] dark:text-white py-[2px] px-[20px]">Weekly Update</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>21.3%</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>1,024</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>5.Jan.2021</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:text-[#fff] dark:bg-[#111C44]">
                    <TableCell className="p-2 dark:bg-[#111C44] dark:border-white"><Checkbox /></TableCell>
                    <TableCell className="whitespace-nowrap text-[#2B3674] dark:text-white py-[2px] px-[20px]">Venus 3D Assets</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>31.5%</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>858</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>7.Mar.2021</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:text-[#fff] dark:bg-[#111C44]">
                    <TableCell className="p-2 dark:bg-[#111C44] dark:border-white"><Checkbox /></TableCell>
                    <TableCell className="whitespace-nowrap text-[#2B3674] dark:text-white py-[2px] px-[20px]">Marketplace</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>12.2%</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>258</TableCell>
                    <TableCell className='py-[2px] px-[20px]'>17.Dec.2021</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default CheckTable;