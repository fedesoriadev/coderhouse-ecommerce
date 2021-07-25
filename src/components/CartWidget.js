const CartWidget = ({itemsOnCart}) =>
    <button className="btn btn-secondary position-relative">
        <i className="bi bi-cart2"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {itemsOnCart}
        </span>
    </button>

export default CartWidget