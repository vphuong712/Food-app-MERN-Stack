import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './FoodMenu.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const FoodMenu = () => {
    return (
        <div className='mt-200' >
            <Container>
                <Row>
                    <Col md={3} sm={4} className={classes['item-card']} >
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src="https://static.kfcvietnam.com.vn/images/items/lg/combo1010.jpg?v=LDoDO3" alt="" />
                                <Card.Text className={classes.price} >
                                    99.000d
                                </Card.Text>
                                <Card.Text className={classes.description} >
                                    4 Miếng Gà Rán + 5 Gà Miếng Nuggets + Khoai Tây Nghiền (Vừa)
                                </Card.Text>
                                <div className='d-grid' >
                                    <Button href="#" size='lg' variant='danger' className={classes.btn} >Thêm</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>
        </div>
    );
}

export default FoodMenu;