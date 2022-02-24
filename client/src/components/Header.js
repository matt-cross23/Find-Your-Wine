import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {BiGitBranch} from 'react-icons/bi'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'> <BiGitBranch size={50}/> Find Wine</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
          <li>
              <Link to='/'>
                <FaHome  /> Home
              </Link>
            </li>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <FcAbout size={30} /> About
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header