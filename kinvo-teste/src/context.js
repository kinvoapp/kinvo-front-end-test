import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batalha apocalipse')
  

  //chamando a api 
//   async function fetchBooks (url) {
//     try {
//       const response = await axios.get(url)
//       const data = await response.data
//       console.log(response)
//     } catch (err){
//       console.log(err)
//     }
//   }


  return <AppContext.Provider value={{
    query,
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
