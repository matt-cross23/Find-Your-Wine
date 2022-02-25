import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
      <div>
    <div>NotFound .....</div>
     <Link to='/'>
         <FaHome /> Back to Home
     </Link>
    </div>

  )
}

export default NotFound