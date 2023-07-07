import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Testimonial = (props) => {

    const reviews = props.reviews;

    const [index, setIndex] = useState(0)
    function leftCliCKHandler() {
        if(index<=0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
    }

    function righttCliCKHandler(){
        if(index>=reviews.length-1){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
        let ran = Math.floor(Math.random() * reviews.length);
        setIndex(ran);
    }
  return (
    <div className='flex  flex-col md:w-[50vw] bg-white mt-8 p-8 rounded-lg hover:shadow-lg shadow-sm transition-all duration-300'>
        <Card review={reviews[index]}/>

        <div className='mx-auto mt-7'>
            <button onClick={leftCliCKHandler} className='text-2xl text-violet-400 m-2'>
                <FaChevronLeft/>
            </button>
            <button onClick={righttCliCKHandler} className='text-2xl text-violet-400 m-2'>
                <FaChevronRight/>
            </button>
        </div>

        <div className='text-center  w-fit mx-auto text-white '>
            <button onClick={surpriseHandler} className=' py-2 px-4 rounded-md bg-violet-500 hover:bg-violet-400 transition-all duration-300'>Surprise Me</button>
        </div>


    </div>
  )
}

export default Testimonial