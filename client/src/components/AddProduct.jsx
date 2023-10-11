import { useState, useContext } from 'react';
import AddProductFormContext from '../store/AddProductFormContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import classes from './AddProduct.module.css';

const FormComponent = () => {
    const [productFormState, productFormDispatch] = useContext(AddProductFormContext);
    const { isShow } = productFormState;
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
            <Modal show={isShow} onHide={() => {productFormDispatch({type: 'HIDE'})}} style={{zIndex: '999999'}}>
                <Modal.Header>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} className={classes.form} onSubmit={handleSubmit} >
                        <Form.Group className={`mb3 ${classes['form-group']}`}>
                            <Form.Label>Link Ảnh</Form.Label>
                            <Form.Control type="text"
                            placeholder="Nhập Link ảnh"
                            required
                            />
                            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={`mb3 ${classes['form-group']}`}>
                            <Form.Label>Giá sản phẩm</Form.Label>
                            <Form.Control 
                            type="text"
                            placeholder="Nhập giá sản phẩm" 
                            required
                            />
                            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={`mb3 ${classes['form-group']}`}>
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Nhập mô tả"
                            required
                            />
                            <Form.Control.Feedback type="invalid">You need type this input!</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="danger" type='submit' size='lg' >
                            Lưu
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {productFormDispatch({type: 'HIDE'})}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormComponent;