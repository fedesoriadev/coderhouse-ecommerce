import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../resources/img/logo.svg'
import CartWidget from './CartWidget.js'

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(categories => setCategories(categories.categories))
    }, [])

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="" width="50" height="50" className="d-inline-block" />
                    Coffee Market
                </NavLink>          
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        {
                            categories.length ? 
                                categories.map(category => {
                                    return (
                                        <li key={'category-' + category.id} className="nav-item">
                                            <NavLink to={'/category/' + category.id} className="nav-link">{category.name}</NavLink>
                                        </li>
                                    )
                                }) : ''
                        }
                    </ul>
                </div>
                <CartWidget />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar