import React from 'react'
import NftData from '../data/NftData'

const Histories = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] text-[#1B2559] font-bold">History</h2>
            <button className="text-[#4318FF] text-[14px] py-[5px] px-[15px] bg-[#F4F7FE] rounded-[70px] font-medium">See all</button>
        </div>
        <div>
            {NftData.map(nft => (
                <div key={nft.id} className='flex justify-between items-center hover:shadow-md p-[10px]'>
                    <img src={nft.imgSrc} alt={nft.imgAlt} className="w-16 h-16 rounded-[12px]" />
                    <div>
                        <h1 className='font-bold text-[14px] text-[#1B2559]'>{nft.title}</h1>
                        <p className=' font-normal text-[12px] text-[#A3AED0]'>{nft.author}</p>
                    </div>
                    <div>
                        <p className='font-bold text-[14px] text-[#2B3674]'>{nft.currentBid}</p>
                    </div>
                    <div>
                        <p className='font-normal text-[14px] text-[#A3AED0]'>{nft.time}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Histories;