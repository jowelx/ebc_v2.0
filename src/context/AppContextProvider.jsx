'use client'
import React from 'react'

export const AppContext = React.createContext({
  allInformation: '',
  setAllInformation: () => { }
})

export const useMyContext = () => {
  return React.useContext(AppContext)
}

export const AppContextProvider = ({ children }) => {

  const [allInformation, setAllInformation] = React.useState([])

  let user = []

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('logedAccount')) !== undefined) {
      user = JSON.parse(localStorage.getItem('logedAccount'))
    }
    setAllInformation(user)
  }, [])


  return (
    <AppContext.Provider value={{ allInformation, setAllInformation }}>
      {children}
    </AppContext.Provider>
  )
}
