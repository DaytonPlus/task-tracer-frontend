const _routes = {
  'AllProjects': {
    path: '/project',
    breadcrumbs: [{ label: 'Proyectos', path: '/project' }]
  },
  'Project': {
    path: '/project/:id',
    breadcrumbs: [{ label: 'Proyectos', path: '/project' }]
  },
  'ProjectAllTasks': {
    path: '/project/:id/task',
    breadcrumbs: [{ label: 'Proyectos', path: '/project' }, { label: 'Tareas', path: '/task' }]
  },
  'ProjectTask': {
    path: '/project/:id/task/:task',
    breadcrumbs: [{ label: 'Proyectos', path: '/project' }, { label: 'Tareas', path: '/task'}]
  }
}

export default function routes(name) {
	let breadcrumbs = _routes[name]?_routes[name].breadcrumbs:[]
	
	return _routes[name].breadcrumbs
}