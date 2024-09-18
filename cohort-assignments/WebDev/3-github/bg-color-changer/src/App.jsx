import './App.css'
import { useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";

function App() {

  const [bgColor, setBgColor] = useState("#171717")

  return (
    <div className='min-h-screen w-screen bg-neutral-900' style={{ background: bgColor }}>
      <div className='flex flex-col items-center min-h-[calc(100vh-4rem)] gap-12'>
        <div className='mt-20 text-6xl text-neutral-100 text-center'>Change the background color</div>
        <div className='h-80 w-[30rem] rounded-lg bg-neutral-800 flex flex-col justify-evenly shadow-lg'>
          <div className='h-[31%] w-full flex justify-evenly'>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#DC2626'} onClick={(e) => setBgColor(e.target.value)}>Red</button>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#16A34A'} onClick={(e) => setBgColor(e.target.value)}>Green</button>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#2563EB'} onClick={(e) => setBgColor(e.target.value)}>Blue</button>
          </div>
          <div className='h-[31%] w-full flex justify-evenly'>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#CA8A04'} onClick={(e) => setBgColor(e.target.value)}>Yellow</button>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#DB2777'} onClick={(e) => setBgColor(e.target.value)}>Pink</button>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#EA580C'} onClick={(e) => setBgColor(e.target.value)}>Orange</button>
          </div>
          <div className='h-[31%] w-full flex justify-evenly'>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#7C3AED'} onClick={(e) => setBgColor(e.target.value)}>Violet</button>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#059669'} onClick={(e) => setBgColor(e.target.value)}>Emerald</button>
            <button className='h-full w-[32%] text-neutral-200 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#0D9488'} onClick={(e) => setBgColor(e.target.value)}>Teal</button>
          </div>
        </div>
        <button className='px-2 py-4 w-40 text-neutral-200 bg-neutral-800 hover:bg-neutral-700 transition-all duration-500 rounded-lg' value={'#171717'} onClick={(e) => setBgColor(e.target.value)}>Default</button>
      </div>
      <div className='h-16 bg-neutral-900 text-neutral-200 flex justify-center gap-3 items-center'>
        Designed by Nikhil <a href="https://x.com/_nikhilcodes" target='_blank'><FaXTwitter /></a>
      </div>
    </div>
  )
}

export default App
