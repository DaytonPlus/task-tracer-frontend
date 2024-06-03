import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useAuth } from '../../components/AuthProvider'
import LoginIcon from '../../../public/login.svg'

export default function Register () {
  const auth = useAuth()
  const navigate = useNavigate()
    
  const { register, handleSubmit, formState: {errors} } = useForm()
	
	const loginHandler =  (data) => {
	  const user = {
	  	username: data.username,
	  	password: data.password,
	  }
	  
		/* send axios request ... onRecive */
		
		user.uid = 0
		
		if(!auth.login({
    	token: '35v3443bn368367n306306wbn407qn420b436b4',
      name: 'Dayton'
    }, '/')) {
    	alert("Invalid user or password")
    }
    
  }

  if(auth.user) {
  	return (
      <Navigate to={'/'} replace={true} />
    )
  }
  
  
  return (
  	<div className="flex justify-center mx-7 mt-8">
    <form onSubmit={handleSubmit(loginHandler)} className="bg-white p-8 max-w-md w-full shadow rounded-lg border">
     <div className="mb-5">
       <h1 className="text-2xl text-purple-600 font-medium">Registrar Usuario</h1>
     </div>
      <div className="relative z-0 w-full mb-5 group">
      <input
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        id="Username"
        name="username"
        placeholder=" "
        required
        {...register("username", { required: 'Username is required' })}
        />
      <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario</label>
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
      </div>
      <div className="relative z-0 w-full my-8 group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          id="password"
          type="password"
          name="password"
          placeholder=" "
          required
          {...register("password", { required: 'Password is required' })}
        />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
      {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
      </div>
      <div className="relative z-0 w-full my-8 group">
        <input
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          id="confirm_password"
          type="password"
          name="confirm_password"
          placeholder=" "
          required
          {...register("confirm_password", { required: 'Comfirm password is required' })}
        />
      <label htmlFor="confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Confirmar Contraseña
      </label>
      {errors.confirm_password && <p className="text-red-500 text-xs">{errors.confirm_password.message}</p>}
      </div>
      
      <div className="flex items-start">
				
      </div>
      
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="inline-flex justify-center items-center text-center shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Registrar
            <img src={LoginIcon} className="rtl:rotate-180 w-3.5 h-3.5 ms-2"></img>
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}
