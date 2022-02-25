
import { createContext, useReducer } from 'react'
import wineReducer from './WineReducer'



const WineContext = createContext()

// Get the api key from .env
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const WineProvider = ({ children }) => {
   
    const initialState = {
        users: [],
        loading: false,
      }
     
      const [state, dispatch] = useReducer
      (wineReducer, initialState)

    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            s: text
        })

        const response = await 
   
        // Fetches the string 
        // fetch(`${GITHUB_URL}/search/users?${params}`, {
        //     headers: {
        //         Authorization: `token ${GITHUB_TOKEN}`
        //     }
        // })
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${params}`, {
	"method": "GET",
	"headers": {
		"host": "the-cocktail-db.p.rapidapi.com",
		"key": "1"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


    //     const {items} = await response.json(items)

    //    dispatch({
    //       type: 'GET_USERS',
    //       payload: items,
    //   })
    }

 // Clear  user from state
 const clearUsers = () => dispatch({type: 'CLEAR_USERS' })


    // set loading 

    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <WineContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
    }}>
        {children}
    </WineContext.Provider>
}

export default WineContext