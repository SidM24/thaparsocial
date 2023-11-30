import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Thapar Social</Link>
                    <div >
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{borderRadius:'1rem'}}/>
                            <button className="btn btn-outline-success" type="submit" style={{borderRadius:'1rem'}}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
