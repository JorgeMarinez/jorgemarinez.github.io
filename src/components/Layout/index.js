import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="App">
      <Sidebar />

      {loading && <Loader type="pacman" />}

      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout