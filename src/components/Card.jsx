import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {

    const review = props.review;
  return (

    <div className='flex flex-col md:relative'>
        <div className=' z-10 absolute top-[-7rem] mx-auto' >
            <img 
            className='aspect-square h-[140px] w-[140px] rounded-full z-[25]'
            src={review.image} alt={review.name}></img>

            <div className='h-[140px] w-[140px] bg-violet-500  rounded-full z-[-10] absolute top-[-6px] left-[6px]' ></div>
        </div>

        <div className='text-center'>
            <p>{review.name}</p>
            <p>{review.job}</p>
        </div>


        <div className='mx-auto mt-7'>
            <FaQuoteLeft/>
        </div>
        <div className='text-center'>
            {review.text}
        </div>
        <div className='mx-auto'>
            <FaQuoteRight/>
        </div>

    </div>

  )
}

export default Card