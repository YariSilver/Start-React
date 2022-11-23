import React, { useRef, useState } from 'react'

const Nav = () => {
    const [myName, setMyName] = useState("Yarin")
    const inputRef = useRef()
    const showMyName = () => {
        setMyName(inputRef.current.value)
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item d-flex align-items-center text-light">
          {myName}
        </li>
      </ul>
      <div className="d-flex" role="search">
        <input ref={inputRef} className="form-control me-2" type="search" placeholder="Search"/>
        <button onClick={showMyName} className="btn btn-outline-light" type="submit">Enter Name...</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav