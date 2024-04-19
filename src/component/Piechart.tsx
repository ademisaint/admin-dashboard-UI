import React from 'react';
import { ResponsivePie } from "@nivo/pie";

type PieChartData = {
    id: string;
    label: string;
    value: number;
    color: string;
  };

const Piechart = () => {
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
            <div  className='h-[150px]'>
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
    )
}

export default Piechart;