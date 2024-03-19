const Job = (job: any) => {
  console.log(job.job.entry.children);
  return (
    <div className="bg-red-500">
      {/* <a href={job.link}>Test <pre>{job.title}</pre></a> */}
      <pre>{job[0]}</pre>
    </div>
  )
}

export default Job
