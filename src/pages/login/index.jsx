import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useAuth } from '../../components/AuthProvider'


export default function Login () {
  const auth = useAuth()
  const navigate = useNavigate()
    
  const { register, handleSubmit, formState: {errors} } = useForm()
	
	const loginHandler =  (data) => {
	  const user = {
	  	username: data.username,
	  	password: data.password,
	  }
	  
	  console.log(user)
	  
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
    <form onSubmit={handleSubmit(loginHandler)} className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Username
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="Username"
            name="username"
            {...register("username", { required: 'Username is required' })}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            type="password"
            {...register("password", { required: 'Password is required' })}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  )
  
}
