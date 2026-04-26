import React, { useEffect, useState } from 'react'
import { Space } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [isAuth, setIsAuth] = useState(true)
  const [user, setUser] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      setUser(user)
      setIsAuth(true)
    }
  }, [])

  const handleLogout = () => {
    setIsAuth(false)
    setUser({})
    localStorage.removeItem("user")
     navigate("/auth/login")   
  }

  // const fir = "Moiz", lastName= "Gujjar"
  // const final = fir + " " + lastName
  // const name = `${fir} ${lastName}!`
  // console.log("final",final)
  // console.log("name", name)

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">React Todos</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
        <button className="btn btn-outline-light" type="submit">Search</button>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form> */}
              <div>
                <Space size={'small'}>
                  {!isAuth
                    ? <>
                      <Link to="/auth/login" className="btn btn-outline-light">Login</Link>
                      <Link to="/auth/register" className="btn btn-outline-info">Register</Link>
                    </>
                    : <>
                      <Link to="/dashboard" className="btn btn-outline-light">Dashboard</Link>
                      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </>
                  }
                </Space>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar