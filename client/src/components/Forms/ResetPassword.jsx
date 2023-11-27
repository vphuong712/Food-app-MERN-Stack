import classes from './ResetPassword.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import * as formik from 'formik';
import * as yup from 'yup';
import { useRouteLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../UI/Loading';
import { getAuthToken } from '../../util/auth';

const ResetPassword = () => {
    const { Formik } = formik;

    const user = useRouteLoaderData('root')
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const schema = yup.object().shape({
        currentPassword: yup.string().required('Please enter your password.'),
        newPassword: yup.string().min(8, 'Your password must be at least 8 characters!').required('Please enter your password.'),
        confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Password incorrect.').required('Please enter your password'),
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
                    const resetPassword = async () => {
                        try {
                            const token = getAuthToken();
                            const userId = user.userId;
                            const response = await axios.put(`https://vphuong712-food-app.onrender.com/user/${userId}/reset-password`, values, {
                                headers : { 'Authorization': 'Bearer ' + token }
                            });
                            setIsLoading(false);
                            if(response.status === 200) {
                                const message = response.data.message;
                                alert(message);
                                navigate('/');
                            }
                        } catch (error) {
                            setIsLoading(false);
                            const errorMessage = error.response.data.message
                            setErrMessage(errorMessage);
                        }
                    }
                    resetPassword();
                }}
                initialValues={{
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} >
                                <Form noValidate onSubmit={handleSubmit}>
                                    <h1>Reset Password</h1>
                                    <p className={classes['err-message']}>{errMessage}</p>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik01">
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="currentPassword"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={errors.currentPassword && touched.currentPassword}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.currentPassword}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik02">
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="New Password"
                                            name="newPassword"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={errors.newPassword && touched.newPassword}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.newPassword}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className={classes['form-group']} controlId="validationFormik03">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={errors.confirmPassword && touched.confirmPassword}
                                        />
                                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                                            {errors.confirmPassword}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button className={classes.submit} variant="danger" type="submit">Change Password</Button>
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

export default ResetPassword;