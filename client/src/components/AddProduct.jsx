import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import classes from './AddProduct.module.css';

const FormComponent = () => {
    return (
        <>
            <Modal show={true} style={{zIndex: '999999'}}>
                <Modal.Header  closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className={classes.form} >
                        <Form.Group className="mb-3">
                            <Form.Label>Link Ảnh</Form.Label>
                            <Form.Control type="text" placeholder="Nhập Link ảnh" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Giá sản phẩm</Form.Label>
                            <Form.Control type="text" placeholder="Nhập giá sản phẩm" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control type="text" placeholder="Nhập mô tả" />
                        </Form.Group>
                        <Button variant="danger" type='submit'>
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormComponent;