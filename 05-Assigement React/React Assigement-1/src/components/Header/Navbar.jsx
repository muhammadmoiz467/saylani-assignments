import { Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container">
    <Link to="/" className="navbar-brand">React App</Link>
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
        <Link to="/auth/login" className="btn btn-outline-light">Login</Link>
        <Link to="/auth/register" className="btn btn-outline-info">Register</Link>
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