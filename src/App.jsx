import { useAuth } from "./components/AuthPage/hook/useAuth"
import NavBar from "./components/layout/nav/NavBar"
import AppRoutes from "./routes/AppRoutes"

function App() {
  const { mode } = useAuth()

  return (
    <div className="relative text-slate-700">
      <div className='flex flex-col min-h-screen'>
        {mode === '' && <NavBar />}
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
