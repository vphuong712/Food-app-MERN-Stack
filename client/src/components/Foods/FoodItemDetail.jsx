import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './FoodItemDetail.module.css';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/cart/cartSlice';


const FoodItemDetail = () => {
    const data = useLoaderData();
    const food = data.data;
    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(addItemToCart({
            id: food._id,
            title: food.title,
            image: food.imageUrl,
            price: food.price,
            quantity: 1
        }))
    }

    return (
        <div className='mt-220'>
            <Container className={classes['block-item']} >
                <Row>
                    <Col md={{ span: 4, offset: 2 }} >
                        <img src={food.imageUrl} alt=""/>
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}  >
                        <Card className={classes['card-item']} >
                            <Card.Body>
                                <Card.Title className={classes.title} >
                                    <h1>{food.title.toUpperCase()}</h1>
                                </Card.Title>
                                <Card.Text>
                                    {food.description}
                                </Card.Text>
                                <Button onClick={addItemHandler} size='lg' variant='danger' className={classes.btn} >Add</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FoodItemDetail;