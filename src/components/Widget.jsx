import React from 'react'
import Review from './Review'
import { Carousel } from 'flowbite-react'

const Widget = () => {
  return (
    <div className="container w-1/2 mx-auto">
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <Review />
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <Review />
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <Review />
    </div>
  </Carousel>
</div> 
</div>
  )
}

export default Widget