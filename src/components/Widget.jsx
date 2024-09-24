import Job from './Jobs'
import { useState, useEffect } from 'react'
import { departments } from '../lib/departments.js'
import { usStates } from '../lib/states.js'
import { Navigate, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Widget = ({ jobs, states }) => {
  const [selectedType, setSelectedType] = useState(null)
  const [selectedBrand, setBrand] = useState(null)
  const [search, setSearch] = useState('')
  const [state, setState] = useState(null)
  const [jobLink, setJobLink] = useState('')

  const navigate = useNavigate()

  const { department } = useParams()

  const { brand } = useParams()

  console.log(jobs)

  useEffect(() => {
    if (localStorage.getItem('jobID')) {
      // setJobLink(localStorage.getItem('jobID'))
      navigate(`/job/${localStorage.getItem('jobID')}`)
    }
    // if (localStorage.getItem('selectedType') != 'null') {
    //   setSelectedType(localStorage.getItem('selectedType'))
    // } else
    if (department) {
      switch (department) {
        case 'clinic-support':
          setSelectedType('Clinic Support')
          break
        case 'marketing-sales':
          setSelectedType('Marketing/Sales')
          break
        case 'clinical-leadership':
          setSelectedType('Clinical Leadership')
          break
        case 'clinical':
          setSelectedType('Clinical')
          break
        case 'central-services':
          setSelectedType('Central Services')
          break
        case 'leadership':
          setSelectedType('Leadership')
          break
        case 'industrial-injury-prevention':
          setSelectedType('Industrial Injury Prevention')
          break
        default:
          setSelectedType(null)
      }
    } else {
      setSelectedType(null)
    }

    brand ? setBrand(brand) : ''
  }, [])

  console.log(brand)

  return (
    <div className='container mx-auto w-screen md:w-full'>
      {/* Search */}
      <div className='mx-auto flex w-full flex-row p-6 md:w-[46rem]'>
        <form className='w-full' onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor='default-search'
            className='sr-only mb-2 text-sm font-medium text-gray-900'
          >
            Search
          </label>
          <div className='relative'>
            <div className='start-0 ps-3 pointer-events-none absolute inset-y-0 flex items-center'>
              <svg
                className='ml-4 h-4 w-4 text-gray-500 '
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
              className='ps-10 block h-16 w-full rounded-l-lg border border-gray-300 bg-gray-50 p-4 pl-12 text-xl font-semibold text-gray-900 placeholder:text-xl placeholder:font-semibold focus:border-blue-500 focus:ring-blue-500'
              placeholder='Search for jobs'
              required=''
              onChange={(e) => {
                e.preventDefault()
                setSearch(e.target.value)
              }}
            />
          </div>
        </form>
        {/* State filter */}
        <div className='mx-auto w-72'>
          <select
            id='states'
            className='ps-10 block h-16 w-full rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 p-4 text-xl font-semibold capitalize text-gray-400 focus:border-blue-500 focus:ring-blue-500'
            onChange={(e) => {
              e.preventDefault()
              e.target.value === 'State'
                ? setState(null)
                : setState(e.target.value)
            }}
          >
            <option defaultValue={null}>State</option>
            {states.map((state, index) => {
              return (
                <option
                  className='pr-8 capitalize text-gray-900'
                  key={index}
                  value={state}
                >
                  {usStates
                    .find((s) => s.abbreviation === state)
                    ?.name.toLowerCase()}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      {/* Filter buttons */}
      {!department ? (
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
                  // localStorage.setItem('selectedType', department)
                }}
              >
                {department}
              </button>
            )
          })}
          {/* Add more buttons for other types if needed */}
        </div>
      ) : (
        <h1 className='my-8 text-center text-5xl font-bold text-gray-900'>
          {selectedType} Jobs
        </h1>
      )}

      {jobs.map((job, index) => {
        if (
          (!selectedType ||
            job['newton:budget_title']?.content === selectedType) &&
          (!state || job['newton:state']?.content === state) &&
          (!selectedBrand ||
            job['newton:budget_group']?.content.toLowerCase() ===
              selectedBrand) &&
          JSON.stringify(job).toLowerCase().includes(search.toLowerCase())
        ) {
          return <Job key={index} job={job} />
        }
      }) || <div className='text-center'>No jobs found</div>}
    </div>
  )
}

export default Widget
