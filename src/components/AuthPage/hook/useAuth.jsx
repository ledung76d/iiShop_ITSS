import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [mode, setMode] = useState('')
  const [searchVal, setSearchVal] = useState('')

  const value = {
    authUser,
    setAuthUser,
    isLogged,
    setIsLogged,
    mode,
    setMode,
    searchVal,
    setSearchVal
  }

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