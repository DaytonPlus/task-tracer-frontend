import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useAuth } from '../../components/AuthProvider'
import Spinner from '../../components/Spinner'

const AllProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user } = useAuth()
  
  const headers = {
    'Authorization': `Token ${user.token}`
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
        const response = _projects //await axios.get('/api/projects', headers);
        setProjects(response.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

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

  if (projects.length === 0) {
    return <div>Vacío</div>
  }

  return (
	    <div className="container mx-auto p-4 pt-6 md:p-6">
	      <h1 className="text-3xl font-bold mb-4">Lista de Proyectos</h1>
	      <ul className="list-none mb-0">
	        {projects.map((project) => (
	          <li key={project.id} className="py-4 border-b border-gray-200">
	            <Link to={`/project/${project.id}`} className="text-blue-600 hover:text-blue-800">
	          	  <h1 className="text-lg">{project.id}</h1>
	            </Link>
	            <h2 className="text-lg font-bold">{project.name}</h2>
	            <p className="text-gray-600">{project.description}</p>
	            <p className="text-gray-600">
	              Fecha de inicio: {project.start_date} - Fecha de fin: {project.end_date}
	            </p>
	            <p className="text-gray-600">
	              Tareas: <Link to={`/project/${project.id}/task`} className="text-blue-600 hover:text-blue-800">{project.tasks}</Link>
	            </p>
	          </li>
	        ))}
	      </ul>
	    </div>
  )
}

export default AllProjects