import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { useAuth } from '../../components/AuthProvider'
import Spinner from '../../components/Spinner'


const ProjectTask = () => {
  const [task, setTask] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const params = useParams()
  const { user } = useAuth()

  const headers = {
    'Authorization': user.token
  }
  
  const _tasks = {
	data: [
  {
    id: 0,
    name: 'Tarea 1',
    description: 'Descripción de la tarea 1',
    start_date: '2024-06-01',
    end_date: '2024-06-30'
  },
  {
    id: 1,
    name: 'Tarea 2',
    description: 'Descripción de la tarea 2',
    start_date: '2024-05-15',
    end_date: 'in progress',
  },
  {
    id: 2,
    name: 'Tarea 3',
    description: 'Descripción de la tarea 3',
    start_date: '2024-04-01',
    end_date: 'in progress'
  }
] }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = {data: _tasks.data[params.task]}//await axios.get('/api/projects', headers);
      	console.log(response)
        setTask(response.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };

    fetchData()
  }, [])

  if (loading) {
    return (
    	<div className="text-center mt-20">
				<Spinner />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!task) {
    return (
    	<div>
		    <h1 className="text-3xl font-bold mb-4">
		    ID de la tarea inválida!
		    </h1>
      	<Link to={`/project/${params.id}/task`}>
        	<button className="bg-green-700 rounded py-1 px-2 m-2">Back</button>
        </Link>
    	</div>
    )
  }

  return (
			<div className="container mx-auto p-4 pt-6 md:p-6">
	      <h1 className="text-3xl font-bold mb-4">{task.name}</h1>
	      <p className="text-gray-600">{task.description}</p>
	      <p className="text-gray-600">
	        Fecha de inicio: {task.start_date} - Fecha de fin: {task.end_date}
	      </p>
	      <div>
	        <button className="bg-red-600 rounded py-1 px-2 m-2">Delete</button>
	        <button className="bg-emerald-600 rounded py-1 px-2 m-2">Edit</button>
	        <Link to={`/project/${params.id}/task`}>
	        	<button className="bg-green-700 rounded py-1 px-2 m-2">Back</button>
	        </Link>
	      </div>
	    </div>
  )
}

export default ProjectTask