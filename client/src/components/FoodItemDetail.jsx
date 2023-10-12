import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './FoodItemDetail.module.css';


const FoodItemDetail = () => {
    return (
        <div className='mt-220'>
            <Container className={classes['block-item']} >
                <Row>
                    <Col md={{ span: 4, offset: 2 }} >
                        <img src="https://static.kfcvietnam.com.vn/images/items/lg/combo1010.jpg?v=LDoDO3" alt=""/>
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}  >
                        <Card className={classes['card-item']} >
                            <Card.Body>
                                <Card.Title className={classes.title} >
                                    <h1>1 FRIED CHICKEN</h1>
                                </Card.Title>
                                <Card.Text>
                                    1 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken
                                </Card.Text>
                                <Button href="#" size='lg' variant='danger' className={classes.btn} >Add</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FoodItemDetail;