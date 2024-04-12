import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import { ResponsiveBar } from '@nivo/bar'

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
          day: "Monday",
          week: 17,
          month: 50,
          year: 75,
        },
        {
          day: "Tuesday",
          week: 20,
          month: 55,
          year: 80,
        },
        {
          day: "Wednesday",
          week: 19,
          month: 45,
          year: 70,
        },
        {
          day: "Thursday",
          week: 15,
          month: 40,
          year: 65,
        },
        {
          day: "Friday",
          week: 17,
          month: 60,
          year: 85,
        },
        {
          day: "Saturday",
          week: 19,
          month: 50,
          year: 75,
        },
        {
          day: "Sunday",
          week: 21,
          month: 45,
          year: 70,
        }
      ];

  return (
    <div>

        <div className='flex justify-between'>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Earnings</p>
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

        <div className='flex justify-between my-[20px]'>
            <div className='w-[50%] p-[25px] bg-white rounded-[20px] mr-[10px]'>
                <div>
                    <h1>Check Table</h1>
                    
                </div>
            </div>

            <div className='w-[50%] p-[25px] bg-white rounded-[20px] ml-[10px]'>

            </div>
            
        </div>

    </div>
  )
}

export default Dashboard