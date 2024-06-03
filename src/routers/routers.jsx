import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProtectedRoute from '../components/ProtectedRoute'
import { useAuth } from '../components/AuthProvider'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'

import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import Profile from '../pages/profile'
import AllProjects from '../pages/projects'
import Project from '../pages/project'
import ProjectAllTasks from '../pages/tasks'
import ProjectTask from '../pages/task'


export default function Routers() {
	  const auth = useAuth()
	 
    return (
        <BrowserRouter>
            <Navbar user={auth.user} />
            <Routes>
                <Route path={"/*"} element={<Home/>}/>
                <Route path={'/login' } element={<Login/>}/>
                <Route path={'/register' } element={<Register/>}/>

                <Route element={<ProtectedRoute redirectTo={'/login'}/>}>
		                <Route path={'/project' } element={<Breadcrumb element={<AllProjects/>}/>}/>
		                <Route path={'/project/:id' } element={<Breadcrumb element={<Project/>}/>}/>
		                <Route path={'/project/:id/task'} element={<Breadcrumb element={<ProjectAllTasks/>}/>}/>
		                <Route path={'/project/:id/task/:task' } element={<Breadcrumb element={<ProjectTask/>}/>}/>
	                	<Route path={'/profile'} element={<Profile/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
    /*
    */
}