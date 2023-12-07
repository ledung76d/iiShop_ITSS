import { AuthContextProvider } from "./hook/useAuth"

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}

export default AuthProvider