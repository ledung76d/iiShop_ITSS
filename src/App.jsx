import { useEffect, useState } from "react";
import NavBar from "./components/layout/nav/NavBar"
import AppRoutes from "./routes/AppRoutes"
import { useLocation } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);


  return (
    <div className="relative text-slate-700">
      <div className='flex flex-col min-h-screen mx-auto'>
        {path !== '/login' && <NavBar />}
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
