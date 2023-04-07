import React from 'react'
import Review from './Review'
import { Carousel } from 'flowbite-react'
import data from '../../lib/reviews.json'

const Widget = () => {
  const reviews = data.reviews.filter(
    (review) =>
      review.comment &&
      review.starRating === 'FIVE' &&
      review.comment.length <= 300
  )
  console.log(reviews)
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
