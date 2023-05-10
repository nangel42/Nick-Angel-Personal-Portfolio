import { useState } from "react"

export default function Nav() {

    const [hamOpen, setHamOpen] = useState(false)

    return (
        <div className="bg-gray-700">
        <nav className="flex justify-between items-center p-4 bg-gray-700">




        <h1 className="text-3xl font-bold">
            <div>
                <span style={{ color: '#FFFF00' }}>{'{'}</span>
                <span style={{ color: '#F92672' }}> Nick </span>
                <span style={{ color: '#FFFF00' }}>{'}'}</span>
                <span style={{ color: '#FFFFFF' }}> </span>
                <span style={{ color: '#66D9EF' }}>Script</span>
                <span style={{ color: '#FFFF00' }}>!</span>
            </div>
        </h1>
                <ul className="flex items-center justify-center space-x-4">
                    <li className="mx-2">
                        <a href="/About" className="text-blue-400 hover:text-white">About</a>
                    </li>

                    {/* For when I one day have a tech Job :) */}
                    {/* <li className="mx-2">
                        <a href="#">Experience</a>
                    </li> */}

                    <li className="mx-2">
                        <a href="#" className="text-purple-400 hover:text-white">Projects</a>
                    </li>

                    <li className="mx-2">
                        <a href="#" className="text-yellow-400 hover:text-white">Contact</a>
                    </li>

                    <li className="mx-2 bg-gray-500 px-4 py-2 rounded-lg">
                        <a href="#" className="text-lime-400 font-bold hover:text-white">Resume</a>
                    </li>


                </ul>

        </nav>

      </div>
    )
}