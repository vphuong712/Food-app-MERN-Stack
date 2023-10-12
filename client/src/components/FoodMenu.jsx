import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodItem from './FoodItem';


const FoodMenu = () => {
    return (
        <div className='mt-220' >
            <Container>
                <Row>
                    <Col md={3} sm={4} >
                        <FoodItem />
                    </Col>
                    <Col md={3} sm={4} >
                        <FoodItem />
                    </Col>
                    <Col md={3} sm={4} >
                        <FoodItem />
                    </Col>
                    <Col md={3} sm={4} >
                        <FoodItem />
                    </Col>
                    <Col md={3} sm={4} >
                        <FoodItem />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FoodMenu;