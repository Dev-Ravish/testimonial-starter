import React from 'react';
import reviews from './data';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[100vh] bg-gray-50' >
      <div className='text-4xl'>
        Our Testimonial
      </div>

      <div className='w-1/12 bg-violet-500 h-1 mt-1'></div>

      <div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  )
}

export default App