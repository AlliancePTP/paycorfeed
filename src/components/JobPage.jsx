import { useParams } from 'react-router-dom'

const Job = () => {
  const { id } = useParams()
  // console.log(job.job.entry.children);
  return (
    <div className='bg-green-500'>
      {/* <a href={job.link.href}>{job.title.content}</a>
      <p>
        {job['newton:location'].content}, {job['newton:state'].content}
      </p> */}
      <h2>Job ID: {id}</h2>
    </div>
  )
}

export default Job
