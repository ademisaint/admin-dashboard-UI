import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface CardsProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    author: string;
    currentBid: number;
  }
  
const Cards: React.FC<CardsProps> = ({ imgSrc, imgAlt, title, author, currentBid }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
      <div className='bg-white rounded-[20px] relative w-[95%]'>
        <div className='p-[15px]'>
            <div className='flex'>
                <img src={imgSrc} alt={imgAlt} className='rounded-[18px]'/>
                <div className=' ml-[-44px] mt-[10px] bg-[white] rounded-full p-[5px] max-h-[35px]'>
                    {isFavorite ? (
                        <FavoriteIcon onClick={toggleFavorite} style={{ color: 'red', backgroundColor: 'white', borderRadius: 30 }} />
                    ) : (
                        <FavoriteBorderIcon onClick={toggleFavorite} style={{ color: '#4318FF', backgroundColor: 'white', borderRadius: 30,}} />
                    )}
                </div>
            </div>
            
            <div className='py-[20px] px-[9px]'>
                <div>
                    <h1 className='text-[18px] font-bold text-[#1B2559]'>{title}</h1>
                    <p className='text-[14px] font-normal text-[#A3AED0]'>by {author}</p>
                </div>
                <div></div>
            </div>
            <div className=' flex pt-[5px] pb-[10px] px-[9px] items-center justify-between'>
                <p className='text-[12px] font-bold text-[#4318FF]'>Current Bid: {currentBid} ETH</p>
                <button className='bg-[#11047A] text-white text-[14px] font-medium py-[5px] px-[15px] rounded-[70px]'>Place Bid</button>
            </div>
        </div>
      </div>
    );
}
  
export default Cards;