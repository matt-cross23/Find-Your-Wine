import { useContext} from 'react'
import UserItem from './UserItem'
import WineContext from '../../context/wine/WineContext'
import '../Styles/Card.css'



function UserResults() {
   const {users, loading} = useContext
   (WineContext)

   


if (!loading) {
    return (
    //   <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
    //     {users.map((user) => (
    //       <UserItem key={user.id} user={user} />
    //     ))}
    //   </div>
      // end
      <div id="projects" className="container mt-5 pt-5">

      {/* <h1 class="text-warning mb-3 pb-2">Text...</h1> */}
       {/* <div class="row"> */}
  
         
       {users.map((user) => (
             <UserItem key={user.id} user={user} />
         ))}
          
       {/* </div> */}
       </div>
    )
  } else {
    return   <h1>Spinner</h1>//<Spinner />
    
  }
}

export default UserResults