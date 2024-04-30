import React from 'react';
import DataTable from 'react-data-table-component';
import { TableColumn } from 'react-data-table-component';

const CreatorsTable = () => {
    type RowData = {
        id: number;
        name: string;
        artwork: number;
        rating: number;
      };

    const columns: TableColumn<RowData>[] = [
        {
            name: 'Name',
            selector: (row: { name: any; }) => row.name,
            style: {
                color: '#2B3674', // Text color for the Name column
                fontWeight: 'bold',
                fontSize: '14px', // Font size for the Name column
            }
        },
        {
            name: 'Artworks',
            selector: (row: { artwork: any; }) => row.artwork,
            style: {
                color: '#A3AED0',
                fontWeight: 'medium',
                fontSize: '14px'
            }
        },
        {
            name: 'Rating',
            cell: (row: RowData) => (
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-[#4318FF] h-full rounded-full" 
                    style={{ width: `${row.rating}%` }}
                  />
                </div>
            ),
        },
    ]

    const data = [
        {
            id: 1,
            name: '@maddison_c21',
            artwork: 9821,
            rating: 100,
        },
        {
            id: 1,
            name: '@karl.will02',
            artwork: 7032,
            rating: 90,
        },
        {
            id: 1,
            name: '@andreea.1z',
            artwork: 5204,
            rating: 80,
        },
        {
            id: 1,
            name: '@abraham47.y',
            artwork: 4309,
            rating: 70,
        },
        {
            id: 1,
            name: '@simmmple.web',
            artwork: 3871,
            rating: 60,
        },
        {
            id: 1,
            name: '@venus.sys',
            artwork: 3152,
            rating: 50,
        },
        {
            id: 1,
            name: '@ape.vpp8',
            artwork: 2907,
            rating: 40,
        },
        {
            id: 1,
            name: '@leon_pwrr',
            artwork: 2309,
            rating: 30,
        },
    ]

    return (
        <div className=" font-dmsans">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[20px] text-[#1B2559] font-bold">Top Creators</h2>
                <button className="text-[#4318FF] text-[14px] py-[5px] px-[15px] bg-[#F4F7FE] rounded-[70px] font-medium">See all</button>
            </div>
            <div className=''>
                <DataTable columns={columns} data={data}></DataTable>
            </div>
            
        </div>
    )
}

export default CreatorsTable;