
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import HomePage from './Pages/HomePage'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/login',
    element: <LoginPage />
  },

  {
    path: '/signup',
    element: <RegisterPage />
  },

])


function App() {


  return (
    <>

      {/* <BrowserRouter>

        

      </BrowserRouter> */}

      <RouterProvider router={appRouter} />



    </>
  )
}

export default App
