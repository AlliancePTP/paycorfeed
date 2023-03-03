import logo from "./logo.svg";
import Widget from './components/Widget'


function App() {

  return (
    <div className="text-center selection:bg-green-900">
      <header className="flex min-h-screen flex-col items-center bg-[#282c34] text-white">
        <img
          src={logo}
          className="animate-speed h-24 motion-safe:animate-spin"
          alt="logo"
        />
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
          }
        </style>
        <p className="bg-gradient-to-r from-emerald-300 mb-6 to-sky-300 bg-clip-text text-5xl leading-relaxed font-black text-transparent selection:bg-transparent">
          Reviews Widgets
        </p>
        <Widget />
      </header>
    </div>
  );
}

export default App;
