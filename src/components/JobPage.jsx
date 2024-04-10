import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { decode } from 'html-entities'
import { useNavigate } from 'react-router-dom'
import he from 'he'

const Job = ({ jobs }) => {
  const { id } = useParams()
  const match = jobs.find((job) => job.id.content === id)
  const description = he.decode(
    DOMPurify.sanitize(decode(match.summary.content))
  )
  const navigate = useNavigate()

  return (
    <div className='container mx-auto mt-6 flex w-[46rem] flex-col'>
      <button
        className='focus:ring-opacity-7 mb-6 w-24 rounded-md bg-[#0A7CBA] px-4 py-2 font-bold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
        onClick={() => navigate('/')}
      >
        Go back
      </button>
      <h1 className='text-3xl font-bold center'>
        {he.decode(match.title.content)}
      </h1>
      <p className='my-4 font-bold'>
        {match['newton:location'].content}, {match['newton:state'].content}
      </p>
      <div className='mt-6' dangerouslySetInnerHTML={{ __html: description }} />
      <form
        className='flex justify-center mt-6'
        method='post'
        action={`https://recruitingbypaycor.com/career/SubmitResume.action?parentUrl=&clientId=8a7883d0879c591b0187e3570b4e28cc&id=${id}`}
      >
        <button
          className='focus:ring-opacity-7 mb-6 w-48 rounded-md bg-[#0A7CBA] px-4 py-2 font-bold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
          type='submit'
        >
          Apply Now
        </button>
      </form>
    </div>
  )
}

export default Job
