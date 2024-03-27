const Paycor = () => {
  return (
    <div className='mx-auto flex w-full flex-wrap justify-between p-6 md:w-[46rem] md:flex-nowrap'>
      <a href='https://recruitingbypaycor.com/career/SubmitResume.action?parentUrl=&clientId=8a7883d0879c591b0187e3570b4e28cc&id=8a7885a88df21562018e3d3982252bd8'>
        Test Apply Link
      </a>
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
