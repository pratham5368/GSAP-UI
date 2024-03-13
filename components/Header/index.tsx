
// To inform next js, this is a client component 
"use client"; 
import Link from 'next/link'
// Import useState from 'react' library 
import { useState } from "react";



function index() {
  {/*const [checked, setChecked] = useState(false);*/}
  return (
    <nav className="sticky top-0  z-50 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm border-slate-600 border-b border-opacity-25 shadow-lg">
     <div className="max-w-5xl mx-auto ">
     <div className="flex items-center justify-between h-14 ">
     <div className="flex space-x-16">
      <span className="text-2xl text-gray-100 font-semibold">W .</span>
      </div>
      <div className="flex space-x-14 text-gray-300 text-sm">

      {/*<Switch checked={checked} setChecked={setChecked} />*/}

        <Link href="/installation">About</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default index;