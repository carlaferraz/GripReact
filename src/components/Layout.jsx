import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Botao from './botao/botao'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Botao />
      <Footer />
    </div>
  )
}

export default Layout
