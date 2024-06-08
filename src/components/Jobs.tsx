import he from 'he'

const Job = ({ job }: any) => {
  return (
    <div className='mx-auto flex flex-wrap justify-between p-6 md:w-[46rem] md:flex-nowrap'>
      <a
        className='w-full font-extrabold text-[#0A7CBA] underline underline-offset-2 md:w-auto'
        href={'https://paycorfeed.lifeatalliance.com/job/' + job.id.content}
      >
        {he.decode(job.title.content)}
      </a>
        <p className='italic font-bold grow w-36 md:text-end'>
          {job['newton:location'].content}, {job['newton:state'].content}
        </p>
    </div>
  )
}

export default Job
