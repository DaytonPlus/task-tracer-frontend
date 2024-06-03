import { Navigate } from 'react-router-dom'
import { useAuth } from '../../components/AuthProvider'

export default function SecureComponent() {
    const auth = useAuth()
    
    if(auth.user == null) {
  		return (<Navigate to={'/login'} replace={true} />)
  	}
  	
  	const handleLogeout = () => {
  		auth.logout()
  	}
     
     
    return (
        <div>
            <p>{`Hello ${auth.user.name}, your Token is: ${auth.user.token}`}</p>
            <button className="bg-amber-400 border-b-amber-500 rounded py-1 px-3" onClick={handleLogeout}>Sign Out!</button>
        </div>
    )
}
