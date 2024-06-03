import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { useAuth } from '../../components/AuthProvider'
import Spinner from '../../components/Spinner'


const ProjectAllTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user } = useAuth()
  const params = useParams()
  
  console.log(params)
  
  const headers = {
    'Authorization': `Token ${user.token}`
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
        const response = _tasks //await axios.get('/api/projects', headers);
        setTasks(response.data)
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

  if (tasks.length === 0) {
    return <div>Vacío</div>
  }

  return (
	    <div className="container mx-auto p-4 pt-6 md:p-6">
	      <h1 className="text-3xl font-bold mb-4">Lista de Tareas</h1>
	      <ul className="list-none mb-0">
	        {tasks.map((task) => (
	          <li key={task.id} className="py-4 border-b border-gray-200">
	            <Link to={`/project/${params.id}/task/${task.id}`} className="text-blue-600 hover:text-blue-800">
	          	  <h1 className="text-lg">{task.id}</h1>
	            </Link>
	            <h2 className="text-lg font-bold">{task.name}</h2>
	            <p className="text-gray-600">{task.description}</p>
	            <p className="text-gray-600">
	              Fecha de inicio: {task.start_date} - Fecha de fin: {task.end_date}
	            </p>
	            <p className="text-gray-600">
	              Del Projecto: <Link to={`/project/${params.id}`} className="text-blue-600 hover:text-blue-800">{params.id}</Link>
	            </p>
	          </li>
	        ))}
	      </ul>
	    </div>
  )
}

export default ProjectAllTasks