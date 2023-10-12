import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showing, hide } from '../features/modals/addProductFormSlice.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import classes from './AddProduct.module.css';

const FormComponent = () => {
    const show = useSelector((state) => state.addProduct.show)
    const dispatch = useDispatch();
    

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return (
        <>
            <Modal show={show} onHide={() => dispatch(hide())} style={{zIndex: '999999'}}>
                <Modal.Header>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} className={classes.form} onSubmit={handleSubmit} >
                        <Form.Group className={`mb3 ${classes['form-group']}`}>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control type="text"
                            placeholder="Add link of image"
                            required
                            />
                            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={`mb3 ${classes['form-group']}`}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="Add title" 
                            required
                            />
                            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={`mb3 ${classes['form-group']}`}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="Add price" 
                            required
                            />
                            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={`mb3 ${classes['form-group']}`}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Add description"
                            required
                            />
                            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="danger" type='submit' size='lg' >
                            Save
                        </Button>
                    </Form>
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