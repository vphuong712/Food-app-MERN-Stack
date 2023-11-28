import classes from './EditProduct.module.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Loading from '../UI/Loading.jsx';
import { getAuthToken } from '../../util/auth';


const EditProduct = () => {
    
    const food = useLoaderData();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [inputValue, setInputValue] = useState({
        imageUrl: food.imageUrl,
        title: food.title,
        price: food.price,
        description: food.description,
    });

    const [errMessage, setErrMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);


    const imgChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            imageUrl: e.target.value
        })
    }

    const titleChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            title: e.target.value
        })
    }

    const priceChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            price: e.target.value
        })
    }

    const descriptionChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            description: e.target.value
        })
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        setIsLoading(true);
        
        const updateProduct = async () => {
            try {
                const token = getAuthToken();
                const response = await axios.put(`https://vphuong712-food-app.onrender.com/menu/${food._id}`, inputValue, {
                    headers: {'Authorization': 'Bearer ' + token}
                })
                setIsLoading(false);
                alert(response.data.message)
                navigate('/')
            } catch (error) {
                setIsLoading(false);
                setErrMessage(error.response.data.message);
            }
        }
        updateProduct();

      };

      const form = (
        <Form method='put' noValidate validated={validated} className={classes.form} onSubmit={handleSubmit} >
            <Form.Group className={`mb3 ${classes['form-group']}`}>
                <Form.Label>Image Link</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Add link of image"
                required
                value={inputValue.imageUrl}
                onChange={imgChangeHandler}
                />
                <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={`mb3 ${classes['form-group']}`}>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Add title" 
                required
                value={inputValue.title}
                onChange={titleChangeHandler}
                />
                <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={`mb3 ${classes['form-group']}`}>
                <Form.Label>Price</Form.Label>
                <Form.Control 
                type="number"
                placeholder="Add price" 
                min="0"
                max="999999"
                required
                value={inputValue.price}
                onChange={priceChangeHandler}
                />
                <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={`mb3 ${classes['form-group']}`}>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Add description"
                required
                value={inputValue.description}
                onChange={descriptionChangeHandler}
                />
                <Form.Control.Feedback type="invalid">{errMessage}</Form.Control.Feedback>
            </Form.Group>
            <Button onClick={() => {navigate(-1)}} variant="secondary" size='lg' >
            Cancel
            </Button>
            <Button variant="danger" type='submit' size='lg' >
                Save
            </Button>
        </Form>
      );

      

    return (
        <div className='mt-220'>
            <Container>
                <Row>
                    <Col className={isLoading ? classes.loading : ''} md={{span: 4, offset: 4}}>
                        <p className={classes['err-message']} >{errMessage}</p>
                        {isLoading ? <Loading /> : form}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EditProduct;