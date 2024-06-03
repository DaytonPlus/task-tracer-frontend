import { Link } from 'react-router-dom'

import Footer from './footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import LeftArrowIcon from '../../../public/login.svg'


export default function Home() {
	  return (
	  	<>
			<section className={`bg-center bg-no-repeat bg-conference bg-gray-700 bg-blend-multiply`}>
			    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
			        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
			          Preparado para administrar tus tareas
			        </h1>
			        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
			          Task Tracer es una aplicacion web que contiene las características de un crud, permite hacer seguimiento de tareas, además posee un sistema de autenticación.
			        </p>
			        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
			            <Link to={"/login"} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
			                Iniciar
			                <img src={LeftArrowIcon} className="w-3.5 h-3.5 ms-2 rtl:rotate-180"></img>
			            </Link>
			            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
			                \_(^-^)_/
			            </a>  
			        </div>
			    </div>
			</section>
			<section className="bg-white dark:bg-gray-900">
			    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
			        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
			            <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
			               CRUD
			            </a>
			            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">How to quickly deploy a static website</h1>
			            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
			            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
			                Read more
			                <img src={LeftArrowIcon} className="w-3.5 h-3.5 ms-2 rtl:rotate-180"></img>
			            </a>
			        </div>
			        
			        <div className="grid md:grid-cols-2 gap-8">
			            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
			                <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
			                    Design
			                </a>
			                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
			                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
			                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
			                  <FontAwesomeIcon className="w-3.5 h-3.5 ms-2 rtl:rotate-180" icon={faArrowRight} />
			                </a>
			            </div>
			            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
			                <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
			                    Code
			                </a>
			                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Best react libraries around the web</h2>
			                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
			                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
			                    <FontAwesomeIcon className="w-3.5 h-3.5 ms-2 rtl:rotate-180" icon={faArrowRight} />
			                </a>
			            </div>
			        </div>
			    </div>
			</section>

			<Footer />
			</>
	  )
}