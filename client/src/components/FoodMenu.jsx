import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodItem from './FoodItem';


const FoodMenu = () => {
    const foods = useLoaderData()
    

    return (
        <div className='mt-220' >
            <Container>
                <Row>
                    {foods.map(food => 
                    <Col md={3} sm={4} key={food._id} >
                        <FoodItem 
                        id={food._id}
                        image={food.imageUrl}
                        title={food.title}
                        price={food.price}
                        description={food.description}
                        />
                    </Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default FoodMenu;