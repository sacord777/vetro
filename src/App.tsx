import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './layouts/Layout'
import './App.css'

const App = () => {
  return (
    <HelmetProvider>
      <Layout>
        <Outlet />
      </Layout>
    </HelmetProvider>
  )
}

export default App
