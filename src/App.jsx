import logo from './logo.svg'
import Widget from './components/Widget'
import { GoogleLogin } from '@react-oauth/google'

function App() {
  const responseMessage = (response) => {
    console.log(response)
  }
  const errorMessage = (error) => {
    console.log(error)
  }

  return (
    <div className='text-center selection:bg-green-900'>
      <header className='flex min-h-screen flex-col items-center bg-[#282c34] text-white'>
        <img
          src={logo}
          className='h-24 animate-speed motion-safe:animate-spin'
          alt='logo'
        />
        <style>
          {
            '\
            .animate-speed{\
              animation-duration:20s;\
            }\
          '
          }
        </style>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        <p className='mb-6 text-5xl font-black leading-relaxed text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text selection:bg-transparent'>
          Reviews Widgets
        </p>
        <Widget />
      </header>
    </div>
  )
}

export default App
