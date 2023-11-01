import classes from './Header.module.css';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarIcon from './UI/CartIcon';
import { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { NavLink, Link, useLoaderData, useSubmit } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showing } from '../features/modals/addProductFormSlice';
import { showing as showCart } from '../features/cart/cartSlice';
import { getAuthToken, checkAdmin } from '../util/auth';

const Header = () => {
    const token = getAuthToken();
    const user = useLoaderData() || {
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: ''
    };

    const [isAdmin] = useState(checkAdmin(user));
    
    const submit = useSubmit();


    const products = useSelector((state) => state.cart.products);
    let totalQuantity = 0;
    if(products.length > 0) {
        totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
    }
    const dispatch = useDispatch();


    const userNav = (
    <NavDropdown title={`${user.firstName} ${user.lastName}`} id="basic-nav-dropdown">
        {isAdmin && <NavDropdown.Item onClick={() => dispatch(showing())} >Add New Food</NavDropdown.Item>}
        <NavDropdown.Item >Order Status</NavDropdown.Item>
        <Link to='account/profile' >Profile</Link>    
        <NavDropdown.Item onClick={() => {
            submit(null, { method: 'post', action: '/logout' })
        }} >Logout</NavDropdown.Item>    
    </NavDropdown>
    );


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
                    {token ? userNav : <Link to="account?mode=login" ><FaCircleUser /></Link>}
                </li>
                <li className={classes.cart}>
                    <Button onClick={() => dispatch(showCart())} variant="outline-danger">
                        <CarIcon />
                        <Badge className={classes.quantity} bg="secondary">{totalQuantity}</Badge>
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