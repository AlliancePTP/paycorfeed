const Paycor = () => {
  return (
    <div className='mx-auto flex w-full flex-wrap justify-between p-6 md:w-[46rem] md:flex-nowrap'>
      <iframe
        id='gnewtonIframe'
        style={{ overflow: 'scroll', height: 4000 }}
        src='https://recruitingbypaycor.com/career/CareerHome.action?clientId=8a7883d0879c591b0187e3570b4e28cc'
        width='100%'
        height='100%'
        frameBorder={0}
        scrolling='yes'
      />
    </div>
  )
}

export default Paycor
