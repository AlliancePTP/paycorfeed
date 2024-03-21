const Job = ({ job }: any) => {
  // console.log(job.job.entry.children);
  return (
    <div className='mx-auto flex w-[46rem] justify-between p-6'>
      <a
        className='font-extrabold text-[#0A7CBA] underline underline-offset-2'
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
