import logo from '../resources/img/logo.svg'
import CartWidget from './CartWidget.js'

const NavBar = ({itemsOnCart}) => 
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="50" height="50" className="d-inline-block" />
                Coffee Market
            </a>            
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Marcas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Granos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cápsulas</a>
                    </li>
                </ul>
            </div>
            <CartWidget itemsOnCart={itemsOnCart} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>


export default NavBar