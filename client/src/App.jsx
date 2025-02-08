
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import HomePage from './Pages/HomePage'
import JobsPage from './Pages/JobsPage'
import BrowsePage from './Pages/BrowsePage'
import ProfilePage from './Pages/ProfilePage'
import JobDescriptionPage from './Pages/JobDescriptionPage'
import CompaniesPage from './Pages/AdminPage/CompaniesPage'
import CompanyCreatePage from './Pages/AdminPage/CompanyCreatePage'


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

  {
    path: '/jobs',
    element: <JobsPage />
  },

  {
    path: '/job-description/:id',
    element: <JobDescriptionPage />
  },

  {
    path: '/browse',
    element: <BrowsePage />
  },

  {
    path: '/profile',
    element: <ProfilePage />
  },

  // Admin
  {
    path: '/admin/companies',
    element: <CompaniesPage />
  },

  {
    path: '/admin/companies/create',
    element: <CompanyCreatePage />
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
