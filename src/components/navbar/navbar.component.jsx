import './navbar.styles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">LOGO</div>
        <div className="links-container">
            <span>LINK</span>
            <span>LINK</span>
            <span>LINK</span>
        </div>
        <div className="nav-cart-icons">
            <span>CART</span>
            <span>SIGN IN</span>
        </div>
    </div>
  )
}

export default Navbar