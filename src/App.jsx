import AuthProvider from './components/AuthProvider'
import Routers from './routers/routers'


export default function App() {
    return (
    	<AuthProvider>
    		<Routers />
      </AuthProvider>
    )
}
