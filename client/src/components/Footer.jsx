import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <Row>
                    <Col className={classes.col} md={3} >
                        <h3>Our Food</h3>
                        <ul>
                            <li><Link>New Products</Link></li>
                            <li><Link>Combo for 1</Link></li>
                            <li><Link>Combo for sharing</Link></li>
                            <li><Link>Fired & Roasted</Link></li>
                            <li><Link>Rice - Burger - Pasta</Link></li>
                            <li><Link>Snacks</Link></li>
                            <li><Link>Desserts & Drinks</Link></li>
                        </ul>
                    </Col>
                    <Col className={classes.col} md={3} >
                        <h3>About KFC</h3>
                        <ul>
                            <li><Link>Our Story</Link></li>
                            <li><Link>Promotion News</Link></li>
                            <li><Link>KFC NEWS</Link></li>
                            <li><Link>KFC Jobs</Link></li>
                            <li><Link>Book Your Party</Link></li>
                            <li><Link>Snacks</Link></li>
                        </ul>
                    </Col>
                    <Col className={classes.col} md={3} >
                        <h3>Contact Us</h3>
                        <ul>
                            <li><Link>Order Tracke</Link>r</li>
                            <li><Link>Find a KFC</Link></li>
                            <li><Link>KContact Us</Link></li>
                        </ul>
                    </Col>
                    <Col className={classes.col} md={3} >
                        <h3>Policy</h3>
                        <ul>
                            <li><Link>Operation Policy</Link></li>
                            <li><Link>Terms and Conditions</Link></li>
                            <li><Link>Policy on Information Confidentially</Link></li>
                        </ul>
                    </Col>
                </Row>
                <p>Copyright © 2023 KFC Vietnam</p>
            </Container>
        </footer>
    );
}

export default Footer;