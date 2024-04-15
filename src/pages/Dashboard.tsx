import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

// import { Checkbox, Table } from "flowbite-react";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import dots from "../assets/images/3-dots.png";

import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from "@nivo/pie";

type PieChartData = {
    id: string;
    label: string;
    value: number;
    color: string;
  };


const Dashboard = () => {
    const data = {
        labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
        datasets: [
          {
            label: 'Total Spent',
            data: [19, 25, 5, 41, 26, 25], // Dummy data for the first line
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
          },
          {
            label: 'Total Spent Last Year',
            data: [45, 49, 60, 71, 46, 45], // Dummy data for the second line
            fill: false,
            borderColor: 'rgb(153, 102, 255)',
            tension: 0.4
          }
        ]
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
            x: {
                grid: {
                  display: false, 
                },
              },
          
          y: {
            beginAtZero: true,
            grid: {
                display: false, 
              },
          },
        },
      };

      const barData = [
        {
          day: "1",
          week: 17,
          month: 50,
          year: 75,
        },
        {
          day: "2",
          week: 20,
          month: 55,
          year: 80,
        },
        {
          day: "3",
          week: 19,
          month: 45,
          year: 70,
        },
        {
          day: "4",
          week: 15,
          month: 40,
          year: 65,
        },
        {
          day: "5",
          week: 17,
          month: 60,
          year: 85,
        },
        {
          day: "6",
          week: 19,
          month: 50,
          year: 75,
        },
        {
          day: "7",
          week: 21,
          month: 45,
          year: 70,
        }
      ];

      const columnData = [
        {
          profit: 4,
          start: "00"
        },
        {
          profit: 2,
          start: "04"
        },
        {
          profit: 6,
          start: "08"
        },
        {
          profit: 3,
          start: "12"
        },
        {
          profit: 5,
          start: "14"
        },
        {
          profit: 7,
          start: "16"
        },
        {
          profit: 1,
          start: "18"
        }
      ];

      const pieData = [
        {
            "id": "Your files",
            "label": "Your files",
            "value": 60,
            "color": "#4318FF"
        },
        {
            "id": "System",
            "label": "System",
            "value": 17,
            "color": "#6AD2FF"
        },
        {
            "id": "Free",
            "label": "Free",
            "value": 23,
            "color": "#EFF4FB"
        },
      ];



  return (
    <div>

        <div className='flex justify-between'>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[hsl(225,32%,73%)]'>Earnings</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>$350.4</h1>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Spend this month</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>$642.39</h1>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Sales</p>
                    <h2 className='text-[#2B3674] font-bold text-[20px]'>$574.34</h2>
                    <p className='text-[10px]'>+23% since last month</p>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Your balance</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>$1,000</h1>
                </div>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>New Tasks</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>154</h1>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Total Projects</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>2935</h1>
                </div>
            </div>
            
        </div>

        <div className='flex justify-between my-[20px]'>
            <div className='w-[50%] p-[25px] bg-white rounded-[20px] mr-[10px]'>
                <div className='flex justify-between'>
                    <p>This month</p>
                    <div>
                        <BarChartIcon htmlColor='#4318FF' className='bg-[#F4F7FE] rounded-[5px]'/>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='w-[20%]'>
                        <h1 className='font-bold text-[22px]'>$37.5K</h1>
                        <p>Total Spent <span>+2.45%</span></p>
                        <div>
                            <span className="indicator">• On track</span>
                        </div>
                    </div>
                    <div className='w-[80%]'><Line data={data} options={options} width={530} height={275}/></div>
                </div>
            </div>

            <div className='w-[50%] p-[25px] bg-white rounded-[20px] ml-[10px]'>
                <div className='flex justify-between'>
                    <p>Weekly Revenue</p>
                    <div>
                        <BarChartIcon htmlColor='#4318FF' className='bg-[#F4F7FE] rounded-[5px]'/>
                    </div>
                </div>

                <div className=''>
                    <div className='w-[500px] h-[202px]'>
                        <ResponsiveBar
                            data={barData}
                            keys={['week', 'month', 'year']} 
                            indexBy="day"
                            padding={0.7}
                            valueScale={{ type: "linear" }}
                            colors={['#4318FF', '#6AD2FF', '#EFF4FB']} //
                            borderColor="transparent"
                            groupMode="stacked"
                            animate={true}
                            enableLabel={false}
                            axisTop={null}
                            axisRight={null}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "degrees",
                                legendPosition: "middle",
                                legendOffset: -40
                            }}
                            theme={{
                                grid: {
                                    line: {
                                        stroke: 'transparent', // Hide grid lines
                                    },
                                },
                            }}
                            // borderRadius={10}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-between my-[20px] h-[100%]'>
            <div className='w-[50%] p-[20px] bg-white rounded-[20px] mr-[10px]'>
                <div className='flex justify-between pb-[15px] items-center'>
                    <h1 className='font-bold text-[20px] text-[#2B3674]'>Check Table</h1>
                    <div className='flex items-top text-[#4318FF] bg-[#F4F7FE] rounded-[7px]'><MoreHorizIcon/></div>
                </div>

                <div className="overflow-x-auto">

                    <Table className=''>
                        <TableHead className='text-[#A3AED0] font-normal text-[12px]'>
                            <TableHeadCell className=' bg-transparent font-medium p1-[5px] px-0 pr-0'>Name</TableHeadCell>
                            <TableHeadCell className=' bg-transparent font-medium'></TableHeadCell>
                            <TableHeadCell className=' bg-transparent font-medium'>Progress</TableHeadCell>
                            <TableHeadCell className=' bg-transparent font-medium'>Quantity</TableHeadCell>
                            <TableHeadCell className=' bg-transparent font-medium'>Date</TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y text-[12px] font-bold text-black pt-2">
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 border-none">
                                <TableCell className="p-2"><Checkbox /></TableCell>
                                <TableCell className="whitespace-nowrap text-gray-900 dark:text-white py-[2px] px-[20px]">
                                Horizon UI PRO
                                </TableCell>
                                <TableCell className='py-[2px] px-[20px]'>17.5%</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>2,458</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>24.Jan.2021</TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="p-2"><Checkbox /></TableCell>
                                <TableCell className="whitespace-nowrap text-gray-900 dark:text-white py-[2px] px-[20px]">Horizon UI Free</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>10.8%</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>1,485</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>12.Jun.2021</TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="p-2"><Checkbox /></TableCell>
                                <TableCell className="whitespace-nowrap text-gray-900 dark:text-white py-[2px] px-[20px]">Weekly Update</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>21.3%</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>1,024</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>5.Jan.2021</TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="p-2"><Checkbox /></TableCell>
                                <TableCell className="whitespace-nowrap text-gray-900 dark:text-white py-[2px] px-[20px]">Venus 3D Assets</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>31.5%</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>858</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>7.Mar.2021</TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="p-2"><Checkbox /></TableCell>
                                <TableCell className="whitespace-nowrap text-gray-900 dark:text-white py-[2px] px-[20px]">Marketplace</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>12.2%</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>258</TableCell>
                                <TableCell className='py-[2px] px-[20px]'>17.Dec.2021</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div className='w-[50%] ml-[10px] flex h-[100%]'>
                <div className='bg-white rounded-[20px] w-[50%] mr-[10px] p-[20px]'>
                    <header className="card-header flex justify-between">
                        <h1 className='text-[14px] text-[#A3AED0] font-medium'>Daily Traffic</h1>
                        <span className="traffic-change text-[#05CD99] text-[12px] font-bold">+2.45%</span>
                    </header>
                    <div className="traffic-count flex">
                        <span className="count font-bold text-[34px]">2.579</span>
                        <span className="visitors text-[#A3AED0] text-[14px] font-medium flex items-center">Visitors</span>
                    </div>
                    <div className="bar-chart p-2 w-[100%] h-[70%]" >
                        <ResponsiveBar
                            data={columnData}
                            keys={["profit"]}
                            indexBy="start"
                            padding={0.6}
                            valueScale={{ type: "linear" }}
                            colors="#3182CE"
                            animate={true}
                            enableLabel={false}
                            labelSkipHeight={0}
                            labelTextColor="black"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                              }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "profit",
                                legendPosition: "end",
                                legendOffset: -40
                            }}
                            theme={{
                                grid: {
                                    line: {
                                        stroke: 'transparent', // Hide grid lines
                                    },
                                    
                                },
                                labels: {
                                    text: {
                                        fontSize: '12px',
                                        color: '#B0BBD5',
                                    }
                                },
                                axis: {
                                    // domain: {
                                    //     line: {
                                    //         stroke: '#B0BBD5', // Assuming colors.grey[500] resolves to '#B0BBD5'
                                    //     },
                                    // },
                                    ticks: {
                                        line: {
                                            stroke: '#E0E0E0', // Assuming colors.grey[100] resolves to '#E0E0E0'
                                            strokeWidth: 1,
                                        },
                                        text: {
                                            fill: '#E0E0E0', // Assuming colors.grey[100] resolves to '#E0E0E0', and changed 'color' to 'fill'
                                            fontSize: '12px', // Added 'fontSize' here to style the tick labels
                                        },
                                    },
                                }
                            }}

                        />
                    </div>
                </div>

                <div className='bg-white rounded-[20px] w-[50%] ml-[10px] p-[20px]'>
                    <header className='flex justify-between'>
                        <h1 className='text-[16px] text-[#2B3674] font-bold'>Your Pie Chart</h1>
                        <div>
                            <select className=' border-0 outline-none text-[#A3AED0] text-[12px] font-bold'>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    </header>

                    <div className='h-[65%] p-4'>
                        <ResponsivePie
                            data={pieData}
                            margin={{ top: 0, right: 1, bottom: 1, left: 1 }}
                            innerRadius={0}
                            padAngle={0.7}
                            cornerRadius={0}
                            activeOuterRadiusOffset={8}
                            colors={{ datum: 'data.color' }}
                            borderWidth={1}
                            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                            enableArcLinkLabels={false}
                            arcLabelsSkipAngle={10}
                            arcLabelsTextColor="transparent"
                        />
                    </div>

                    <div className="legend flex p-2 justify-between mx-[20px] shadow-sm rounded-[15px]">
                        {pieData.map((item: PieChartData, index: number) => (
                            <div className="legend-item " key={index}>
                                <span className="color-box" style={{ background: item.color }}></span>
                                <p className="label text-[12px] font-medium text-[#A3AED0]">{item.label}</p>
                                <p className="percentage text-[18px] font-bold flex justify-center">{item.value}%</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>

        <div className='flex justify-between my-[20px]'>

            <div className='w-[50%] p-[20px] bg-white rounded-[20px] mr-[10px]'>
                <div className='flex justify-between pb-[15px] items-center'>
                    <h1 className='font-bold text-[20px] text-[#2B3674]'>Complex Table</h1>
                    <div className='flex items-top text-[#4318FF] bg-[#F4F7FE] rounded-[7px]'><MoreHorizIcon/></div>
                </div>
                <div>
                    <Table>
                        <TableHead>
                            <TableHeadCell>Name</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Progress</TableHeadCell>
                        </TableHead>
                        <TableBody>
                            <TableRow>Horizon UI PRO</TableRow>
                            <TableRow>Horizon UI Free</TableRow>
                            <TableRow>Marketplace</TableRow>
                            <TableRow>Weekly Updates</TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className='w-[50%] p-[20px] rounded-[20px] ml-[10px]'>

            </div>

        </div>

    </div>
  )
}

export default Dashboard