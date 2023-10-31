import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './FoodItemDetail.module.css';
import { Link, useNavigate, useRouteLoaderData } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/cart/cartSlice';
import axios from 'axios';
import { getAuthToken } from '../../util/auth';


const FoodItemDetail = () => {
    const data = useLoaderData();
    const token = useRouteLoaderData('root');
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const food = data.data;

    const addItemHandler = () => {
        dispatch(addItemToCart({
            id: food._id,
            title: food.title,
            image: food.imageUrl,
            price: food.price,
            quantity: 1
        }));

    }

    const deleteItemHandler = () => {
        const notify = confirm('Are you sure you want to delete ?')
        if (notify) {
            const deleteFood = async () => {
                try {
                    const token = getAuthToken()
                    const response = await axios.delete('http://localhost:8080/menu', { data: {id: food._id} }, {
                        headers: { 'Authorization': 'Bearer ' + token }
                    })
                    alert(response.data.message)
                    navigate('/')
                } catch (error) {
                    alert(error.response.data.message)
                }
            }
            deleteFood();
        }
    }

    return (
        <div className='mt-220'>
            <Container className={classes['block-item']} >
                <Row>
                    <Col md={{ span: 4, offset: 2 }} >
                        <img src={food.imageUrl} alt=""/>
                        <div className={classes['btn-wrap']} >
                            <Button variant="danger" size='lg' >
                                <Link to='edit' >Edit</Link>
                            </Button>
                            <Button onClick={deleteItemHandler} variant="danger" size='lg' >Delete</Button>
                        </div>
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
                                <Button onClick={token ? addItemHandler : navigate.bind(null, '/account?mode=login')} size='lg' variant='danger' className={classes.btn} >Add</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FoodItemDetail;