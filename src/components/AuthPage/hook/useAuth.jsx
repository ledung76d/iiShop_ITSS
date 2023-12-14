import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [searchVal, setSearchVal] = useState('')

  const hanldeLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
    setIsLogged(false)
  }
  const value = {
    authUser,
    setAuthUser,
    isLogged,
    setIsLogged,
    searchVal,
    setSearchVal,
    hanldeLogout,
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
    // change json to object

    if (accessToken && user) {
      setAuthUser(JSON.parse(user))
      setIsLogged(true)
    }
  }, [isLogged])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}