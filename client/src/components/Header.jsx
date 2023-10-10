import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <nav>
            <a href="/" className={classes.logo} ></a>
            <ul>
                <li><a href="">THỰC ĐƠN</a></li>
                <li><a href="">KHUYẾN MÃI</a></li>
                <li><a href="">DỊCH VỤ TIỆC</a></li>
                <li><a href="">HỆ THỐNG NHÀ HÀNG</a></li>
            </ul>
        </nav>
        <section>
            <p>
                <span>Đặt Ngay</span>
                <span>Giao Hàng</span>
                <span>hoặc Mang đi</span>
            </p>
            <button>Bắt đầu đặt hàng</button>
        </section>
    </header>
}

export default Header;