import classes from './Order.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import * as formik from 'formik';
import * as yup from 'yup';
import Loading from '../UI/Loading';
import { useState, useEffect } from 'react';
import { getAuthToken } from '../../util/auth';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsFromCart } from '../../features/cart/cartSlice';
import OrderItem from './OrderItem';
import { formatPrice } from '../../util/format';
import axios from 'axios';
import { useRouteLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Order = () => {
    const { Formik } = formik;
    const user = useRouteLoaderData('root');
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(getItemsFromCart());
    }, [])

    let total = 0;
    if(products.length > 0) {
      total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    }
    
    
    // const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const schema = yup.object().shape({
        receiver: yup.string().max(50, 'Your receiver name must be under 50 characters').required('Please enter your receiver name.'),
        address: yup.string().max(50, 'Your Address Name must be under 50 characters').required('Please enter your address.'),
        phoneNumber: yup
        .string()
        .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, { message: 'Please enter valid phone number.' })
        .required('Please enter your phone number.'),
    });
  
    return (
        <>
            {isLoading ? <div className={classes.loading} >
                <Loading/>
            </div> : 
            <>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                    setIsLoading(true);
                    const postOrder = async () => {
                        setIsLoading(true)
                        const token = getAuthToken();
                        try {
                            const response = await axios.post(`https://vphuong712-food-app.onrender.com/user/${user.userId}/order`,
                            {
                                ...values,
                                orderItems: products,
                                totalPrice: total
                            },
                            {
                                headers: { 'Authorization': 'Bearer ' + token }
                            });
                            setIsLoading(false)
                            if(response.status === 200) {
                                alert(response.data.message);
                                navigate('/account/order-status')
                            }
                        } catch (error) {
                            setIsLoading(false)
                            throw error
                        }
                    }
                    postOrder();
                }}
                initialValues={{
                    receiver: '',
                    address: '',
                    phoneNumber: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Container fluid >
                        <Row className={classes['order-body']} >
                            {products.map(product =>
                            <Col key={product.id} md={{ span: 6, offset: 3 }} >
                                <OrderItem
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                quantity={product.quantity}
                                />
                            </Col>)}
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} >
                                <Form noValidate onSubmit={handleSubmit}>
                                    <h3>Total: {`${formatPrice(total)}đ`}</h3>
                                    <p className={classes['err-message']}>{errMessage}</p>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik01">
                                        <Form.Label>Receiver</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Receiver"
                                            name="receiver"
                                            value={values.receiver}
                                            onChange={handleChange}
                                            isInvalid={errors.receiver && touched.receiver}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.receiver}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik02">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Address"
                                            name="address"
                                            value={values.address}
                                            onChange={handleChange}
                                            isInvalid={errors.address && touched.address}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.address}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik03">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Phone Number"
                                            name="phoneNumber"
                                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                            maxLength='11'
                                            value={values.phoneNumber}
                                            onChange={handleChange}
                                            isInvalid={errors.phoneNumber && touched.phoneNumber}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.phoneNumber}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className={classes.submit} variant="danger" type="submit">Order</Button>
                                </Form>
                            </Col>

                        </Row>
                    </Container>
                )}
            </Formik>
            </>
            }
        </>
    );    
}

export default Order;