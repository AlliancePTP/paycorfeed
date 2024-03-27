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
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <h1 className='center text-3xl font-bold'>
        {he.decode(match.title.content)}
      </h1>
      <div className='mt-6' dangerouslySetInnerHTML={{ __html: description }} />
      <p>
        {match['newton:location'].content}, {match['newton:state'].content}
      </p>
      <h2>Job ID: {id}</h2>
    </div>
  )
}

export default Job
