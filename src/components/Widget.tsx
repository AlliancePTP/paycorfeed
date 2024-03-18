import React, { useState } from 'react'
import Review from './Review'
import { Carousel } from 'flowbite-react'


const Widget = () => {
  const [jobs, setJobs] = useState([])
  fetch('https://recruitingbypaycor.com/career/CareerAtomFeed.action?clientId=8a7883d0879c591b0187e3570b4e28cc').then((response) => response.text().then((xml) => setJobs(xml)))
  // const jobs = data.reviews.filter(
  //   (review) =>
  //     review.comment &&
  //     review.starRating === 'FIVE' &&
  //     review.comment.length <= 300
  // )
  return (
    <div className='container mx-auto'>
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
        <Carousel slideInterval={5000}>
          {reviews.map((review) => (
            <div className='flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white'>
              {/* <div key={review.reviewId}>{review.comment}</div> */}
              <Review
                comment={review.comment}
                name={review.reviewer.displayName}
              />
            </div>
          ))}
          {/* <div className='flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white'>
            <Review />
          </div>
          <div className='flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white'>
            <Review />
          </div> */}
        </Carousel>
      </div>
    </div>
  )
}

export default Widget
