import { Link } from 'react-router-dom';
import SeparatorIcon from '../../public/breadcrumb.svg';
import HouseIcon from '../../public/house.svg';
import routes from '../routers/routes'

const Breadcrumb = ({ element }) => {
	const items = routes(element.type.name)
	
	return (
		<>
		<nav className="flex">
		  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
		    <li className="inline-flex items-center">
		      <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
		        <img src={HouseIcon} className="w-3 h-3 me-2.5"></img>
		        Home
		      </Link>
		    </li>
		    {items.map((item, index) => {
		    let is = index < items.length - 1;
		    return (
		    <li key={index}>
		      <div className="flex items-center">
		        <img src={SeparatorIcon} className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
		        <Link to={item.path} className={`ms-1 text-sm md:ms-2 font-medium ${is?"text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white":"text-gray-500 dark:text-gray-400"}`}>
		        	{item.label}
		        </Link>
		      </div>
		    </li>
		    )})}
		  </ol>
		</nav>
	  <hr />
	  {element}
		</>
	)
}

export default Breadcrumb;