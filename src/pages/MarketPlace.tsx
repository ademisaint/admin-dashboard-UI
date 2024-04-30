import React from 'react';
import Cards from '../component/Cards';
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import card5 from '../assets/images/card5.png'
import card6 from '../assets/images/card6.png'
import CreatorsTable from '../component/CreatorsTable';
import NftData from '../data/NftData';
import Histories from '../component/Histories';

const MarketPlace = () => {
  return (
    <div className='flex font-dmsans'>

        <div className='w-[70%] pr-[10px]'>
            <div className='w-[100%]'>
                <div className='marketPlace rounded-[20px]'>
                    <div className='px-[40px] py-[50px]'>
                        <div className=' w-[45%]'>
                            <h1 className=' text-white text-[30px] font-bold'>Discover, collect and sell extraordinary NFTs</h1>
                            <p className='text-[#E3DAFF] text-[12px] font-medium pt-[5px] pr-[55px] leading-6'>Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
                        </div>
                        <div className='flex pt-[30px]'>
                            <button className='bg-white rounded-[10px] text-[16px] font-medium py-[5px] px-[10px]'>Discover now</button>
                            <button className='text-[#E9E3FF] text-[16px] font-medium py-[5px] px-[40px]'>watch video</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <header className='flex justify-between mx-[20px] mt-[40px] mb-[10px]'>
                    <h1 className='text-[24px] text-[#2B3674] font-bold'>Trending NFTs</h1>
                    <div className='flex'>
                        <p>Art</p>
                        <p>Music</p>
                        <p>Collectibles</p>
                        <p>Sports</p>
                    </div>
                </header>
                <div className='trendingCards flex justify-between mt-[10px]'>
                    <div>
                        <Cards
                            imgSrc={card1}
                            imgAlt="Image Alt Text"
                            title="Abstract Colors"
                            author="Esthera Jackson"
                            currentBid={0.91}
                        />
                    </div>

                    <div>
                        <Cards
                            imgSrc={card2}
                            imgAlt="Image Alt Text"
                            title="ETH AI Brain"
                            author="Nick Wilson"
                            currentBid={2.82}
                        />
                    </div>

                    <div>
                        <Cards
                            imgSrc={card3}
                            imgAlt="Image Alt Text"
                            title="Mesh Gradients"
                            author="Will Smith"
                            currentBid={0.56}
                        />
                    </div>
                    
                </div>
            </div>
            <div>
                <div className='mx-[20px] mt-[40px] mb-[10px]'>
                    <h1 className='text-[24px] text-[#2B3674] font-bold'>Recently Added</h1>
                </div>
                <div className='recentCards flex justify-between mt-[10px]'>
                    <div>
                        <Cards
                            imgSrc={card4}
                            imgAlt="Image Alt Text"
                            title="Swipe Circles"
                            author="Peter Will"
                            currentBid={2.30}
                        />
                    </div>

                    <div>
                        <Cards
                            imgSrc={card5}
                            imgAlt="Image Alt Text"
                            title="Colorful Heaven"
                            author="Mark Benjamin"
                            currentBid={1.30}
                        />
                    </div>

                    <div>
                        <Cards
                            imgSrc={card6}
                            imgAlt="Image Alt Text"
                            title="3D Cubes Art"
                            author="Manny Gates"
                            currentBid={6.58}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[30%] pl-[10px]'>
            <div className='bg-white p-[20px] rounded-[20px]'>
                <CreatorsTable/>
            </div>
            <div className='bg-white p-[20px] rounded-[20px] mt-[20px]'>
                <Histories/>
            </div>
        </div>

    </div>
  )
}

export default MarketPlace