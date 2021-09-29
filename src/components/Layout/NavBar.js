import { firestore } from '../../services/firebase'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../resources/img/logo.svg'
import CartWidget from './CartWidget.js'

const NavBar = () => {

    const [categories, setCategories] = useState([])

    const [showNavbar, setShowNavbar] = useState(false)


    const toggleNavbar = () => setShowNavbar(!showNavbar)

    useEffect(() => {
        firestore.collection('categories')
            .get()
            .then(query => {
                setCategories(query.docs.map(category => {
                    return {id: category.id, ...category.data()}
                }))
            }).catch(error => {
                console.warn('Error searching categories: ', error)
            })        
    }, [])

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="" width="50" height="50" className="d-inline-block" />
                    Coffee Market
                </NavLink>
                
                


                <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`} id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        {
                            categories.length ? 
                                categories.map(category => {
                                    return (
                                        <li key={'category-' + category.id} className="nav-item">
                                            <NavLink to={'/category/' + category.slug} className="nav-link">{category.name}</NavLink>
                                        </li>
                                    )
                                }) : ''
                        }
                    </ul>
                </div>

                <CartWidget />

                <button onClick={toggleNavbar} className="navbar-toggler" type="button" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>             
            </div>
        </nav>
    )
}

export default NavBar