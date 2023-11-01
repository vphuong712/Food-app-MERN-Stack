import classes from './UserProfileDetail.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import * as formik from 'formik';
import * as yup from 'yup';
import { useRouteLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../UI/Loading';
import { getAuthToken } from '../../util/auth';

const UserProfileDetail = () => {
    const { Formik } = formik;

    const user = useRouteLoaderData('root')
    const [userData, setUserData] = useState(user);

    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const schema = yup.object().shape({
      firstName: yup.string().max(50, 'Your First Name must be under 50 characters').required('Please enter your first name.'),
      lastName: yup.string().max(50, 'Your Last Name must be under 50 characters').required('Please enter your last name.'),
      email: yup.string().max(50, 'Your Email must be under 50 characters').email('Please enter a valid email address.').required('Please enter your email address.'),
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
                    const updateUser = async () => {
                        try {
                            const token = getAuthToken();
                            const userId = user.userId;
                            const response = await axios.put(`http://localhost:8080/user/${userId}`,
                            {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                address: values.address,
                                phoneNumber: values.phoneNumber
                            },
                            {
                                headers: { 'Authorization': 'Bearer ' + token}
                            })
                            setIsLoading(false);
                            if(response.status === 200) {
                                const message = response.data.message;
                                alert(message);
                                setUserData(response.data.user);
                                setTimeout(() => {
                                    location.reload();
                                }, 100);
                            }
                        } catch (error) {
                            setIsLoading(false);
                            const message = error.response.data.message;
                            setErrMessage(message);
                        }
                    }
                    updateUser();
                }}
                initialValues={{
                firstName: userData.firstName,
                lastName: userData.lastName ,
                email: userData.email,
                address: userData.address,
                phoneNumber: userData.phoneNumber,
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} >
                                <Form noValidate onSubmit={handleSubmit}>
                                    <h1>Account Details</h1>
                                    <p className={classes['err-message']}>{errMessage}</p>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik01">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="firstName"
                                        placeholder='First Name'
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isInvalid={errors.firstName && touched.firstName}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik02">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder='Last Name'
                                        value={values.lastName}
                                        onChange={handleChange} 
                                        isInvalid={errors.lastName && touched.lastName}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik04">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={values.email}
                                            disabled
                                            isInvalid={errors.email && touched.email}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik03">
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
                                    <Form.Group className={classes['form-group']} controlId="validationFormik07">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                        type="tel"
                                        placeholder="Phone Number"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        maxLength='11'
                                        name="phoneNumber"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        isInvalid={errors.phoneNumber && touched.phoneNumber}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                        {errors.phoneNumber}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className={classes.submit} variant="danger" type="submit">Update Account</Button>
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

export default UserProfileDetail;