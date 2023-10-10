import ModalContext from '../store/ModalContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Header.module.css';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';



const Header = () => {
    const [state, dispatch] = useContext(ModalContext);

    return <header className={classes.header}>
        <nav>
            <ul>
                <li><a href="/" className={classes.logo} ></a></li>
                <li><a href="">THỰC ĐƠN</a></li>
                <li><a href="">KHUYẾN MÃI</a></li>
                <li><a href="">DỊCH VỤ TIỆC</a></li>
                <li><a href="">HỆ THỐNG NHÀ HÀNG</a></li>
            </ul>
            <ul>
                <li className={classes.user} >
                    <Button variant="outline-danger">Admin</Button>
                </li>
                <li className={classes.cart}>
                    <Button onClick={() => {dispatch({type: 'SHOW'})}}  variant="outline-danger">
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