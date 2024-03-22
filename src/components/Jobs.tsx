const Job = ({ job }: any) => {
  return (
    <div className='mx-auto flex w-full flex-wrap justify-between p-6 md:w-[46rem] md:flex-nowrap'>
      <a
        className='w-full font-extrabold text-[#0A7CBA] underline underline-offset-2 md:w-auto'
        href={'job/' + job.id.content}
      >
        {job.title.content}
      </a>
      <p className='italic font-bold'>
        {job['newton:location'].content}, {job['newton:state'].content}
      </p>
    </div>
  )
}

export default Job
