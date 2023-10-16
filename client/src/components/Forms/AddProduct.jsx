import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showing, hide } from '../../features/modals/addProductFormSlice.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Loading from '../UI/Loading.jsx';
import axios from 'axios'
import classes from './AddProduct.module.css';


const FormComponent = () => {

    const show = useSelector((state) => state.addProduct.show)
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState({
        imageUrl: '',
        title: '',
        price: '',
        description: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const imgUrlChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            imageUrl: e.target.value
        });
    }

    
    const tittleChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            title: e.target.value
        });
    }

    
    const priceChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            price: e.target.value
        });
    }

    
    const descriptionChangeHandler = (e) => {
        setInputValue({
            ...inputValue,
            description: e.target.value
        });
    }



    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        setIsLoading(true);
        const postData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/menu', inputValue);
                setIsLoading(false);
                setValidated(false);
                alert(response.data.message);
            } catch(error) {
                setIsLoading(false);
                setValidated(false);
                setErrMessage(error.message);
            }
        }
        postData();
      };

    const form = (
    <Form method='post' noValidate validated={validated} className={classes.form} onSubmit={handleSubmit} >
        <p className={classes['err-message']} >{errMessage}</p>
        <Form.Group className={`mb3 ${classes['form-group']}`}>
            <Form.Label>Image Link</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Add link of image"
            required
            onChange={imgUrlChangeHandler}
            />
            <Form.Control.Feedback type="invalid">'You need type this input!'</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className={`mb3 ${classes['form-group']}`}>
            <Form.Label>Title</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Add title" 
            required
            onChange={tittleChangeHandler}
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
            onChange={descriptionChangeHandler}
            />
            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="danger" type='submit' size='lg' >
            Save
        </Button>
    </Form>
    );

    return (
        <>
            <Modal show={show} onHide={() => dispatch(hide())} style={{zIndex: '999999'}}>
                <Modal.Header>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className={isLoading ? classes.loading : ''} >
                    {isLoading ? <Loading /> : form}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(hide())}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormComponent;