import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Header.module.css';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="">THỰC ĐƠN</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="discount">KHUYẾN MÃI</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="book-party">DỊCH VỤ TIỆC</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? classes.active : ''} to="restaurant">HỆ THỐNG NHÀ HÀNG</NavLink></li>
            </ul>   
            <ul>
                <li className={classes.user} >
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => dispatch(showing())} >Thêm món ăn</NavDropdown.Item>    
                    </NavDropdown>
                </li>
                <li className={classes.cart}>
                    <Button onClick={() => dispatch(showCart())} variant="outline-danger">
                        Shop <Badge bg="secondary">0</Badge>
                    </Button>
                </li>
            </ul>
        </nav>
        <section>
            <p>
                <span>Đặt Ngay</span>
                <span>Giao Hàng</span>
                <span>hoặc Mang đi</span>
            </p>
            <Button className={classes.btn} href="#" size='lg' variant='danger'>Bắt đầu đặt hàng</Button>
        </section>
    </header>
}

export default Header;