import { Link } from "react-router-dom"

const PageNotFound = () =>
    <main className="container text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="lead">Solo una taza vacía por aquí</p>
        <Link to="/" className="btn btn-primary">Vamos a elegir un café</Link>
    </main>

export default PageNotFound