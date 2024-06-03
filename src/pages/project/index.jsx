import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { useAuth } from '../../components/AuthProvider'
import Spinner from '../../components/Spinner'


const Project = () => {
  const [project, setProject] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const params = useParams()
  const { user } = useAuth()

  const headers = {
    'Authorization': user.token
  }
  
  const _projects = {
	data: [
  {
    id: 0,
    name: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    start_date: '2024-06-01',
    end_date: '2024-06-30',
    tasks: 5
  },
  {
    id: 1,
    name: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    start_date: '2024-05-15',
    end_date: '2024-06-15',
    tasks: 3
  },
  {
    id: 2,
    name: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    start_date: '2024-04-01',
    end_date: '2024-05-01',
    tasks: 2
  }
] }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = {data: _projects.data[params.id]}//await axios.get('/api/projects', headers)
      	console.log(response)
        setProject(response.data)
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

  if (!project) {
    return <div>ID de projecto inválido!</div>
  }

  return (
			<div className="container mx-auto p-4 pt-6 md:p-6">
	      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
	      <p className="text-gray-600">{project.description}</p>
	      <p className="text-gray-600">
	        Fecha de inicio: {project.start_date} - Fecha de fin: {project.end_date}
	      </p>
	      <p className="text-gray-600">
	        Tareas: <Link to={`/project/${project.id}/task`} className="text-blue-600 hover:text-blue-800">{project.tasks}</Link>
	      </p>
	      <div>
	        <button className="bg-red-600 rounded py-1 px-2 m-2">Delete</button>
	        <button className="bg-emerald-600 rounded py-1 px-2 m-2">Edit</button>
	        <Link to={"/project/"}>
	        	<button className="bg-green-700 rounded py-1 px-2 m-2">Back</button>
	        </Link>
	      </div>
	    </div>
  )
}

export default Project