import classes from './Header.module.css';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarIcon from './UI/CartIcon';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showing } from '../features/modals/addProductFormSlice';
import { showing as showCart } from '../features/modals/cartSlice';



const Header = () => {

    const dispatch = useDispatch();



    return <header className={classes.header}>
        <nav>
            <ul className={classes['main-navigation']} >
                <li><Link to="" className={classes.logo} ></Link></li>
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="">MENU</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="deals">DEALS</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="book-a-party">BOOK A PARTY</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="restaurant">FIND A KFC</NavLink></li>
            </ul>   
            <ul>
                <li className={classes.user} >
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => dispatch(showing())} >Add New Food</NavDropdown.Item>    
                    </NavDropdown>
                </li>
                <li className={classes.cart}>
                    <Button onClick={() => dispatch(showCart())} variant="outline-danger">
                        <CarIcon />
                        <Badge className={classes.quantity} bg="secondary">0</Badge>
                    </Button>
                </li>
            </ul>
        </nav>
        <section>
            <p>
                <span>Let's Order</span>
                <span>for Delivery</span>
                <span>or Takeaway</span>
            </p>
            <Button className={classes.btn} href="#" size='lg' variant='danger'>Start Order</Button>
        </section>
    </header>
}

export default Header;