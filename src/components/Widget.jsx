import Job from './Jobs'
import { useState, useEffect } from 'react'
import { departments } from '../lib/departments.js'

const Widget = ({ jobs }) => {
  const [selectedType, setSelectedType] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
      if (localStorage.getItem('selectedType') != 'null') {
    setSelectedType(localStorage.getItem('selectedType'))
  } else {
    setSelectedType(null)
  }
  }, [])

  return (
    <div className='container w-screen mx-auto md:w-full'>
      {/* Search */}
      <div className='mx-auto mb-8 w-full p-6 md:w-[46rem]'>
        <form>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3'>
              <svg
                className='w-4 h-4 ml-4 text-gray-500 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 pl-12 text-xl font-semibold text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 placeholder:text-xl placeholder:font-semibold focus:border-blue-500 focus:ring-blue-500'
              placeholder='Search for jobs'
              required=''
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </div>
        </form>
      </div>
      {/* Filter buttons */}
      <div className='mx-auto mb-8 flex w-full flex-wrap justify-center gap-4 md:w-[46rem] md:p-6'>
        <button
          className={`rounded-md px-4 py-2 ${
            selectedType === null
              ? 'bg-[#0A7CBA] text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => {
            setSelectedType(null)
            localStorage.setItem('selectedType', null)
          }}
        >
          All
        </button>
        {departments.map((department, index) => {
          return (
            <button
              key={index}
              className={`rounded-md px-4 py-2 ${
                selectedType === department
                  ? 'bg-[#0A7CBA] text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => {
                setSelectedType(department)
                localStorage.setItem('selectedType', department)
              }}
            >
              {department}
            </button>
          )
        })}
        {/* Add more buttons for other types if needed */}
      </div>

      {jobs.map((job, index) => {
        if (
          (!selectedType ||
            job['newton:budget_title']?.content === selectedType) &&
          JSON.stringify(job).toLowerCase().includes(search.toLowerCase())
        ) {
          return <Job key={index} job={job} />
        }
      })}
    </div>
  )
}

export default Widget
