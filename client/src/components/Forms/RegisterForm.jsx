import classes from './RegisterForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const RegisterForm = () => {
    const { Formik } = formik;

    const [errMessage, setErrMessage] = useState('');
    const [conflictEmailMsg, setConflictEmailMsg] = useState('');

    const schema = yup.object().shape({
      firstName: yup.string().max(50, 'Your First Name must be under 50 characters').required('Please enter your first name.'),
      lastName: yup.string().max(50, 'Your Last Name must be under 50 characters').required('Please enter your last name.'),
      email: yup.string().max(50, 'Your Email must be under 50 characters').email('Please enter a valid email address.').required('Please enter your email address.'),
      password: yup.string().min(8, 'Your password must be at least 8 characters!').required('Please enter your password.'),
      address: yup.string().max(50, 'Your Address Name must be under 50 characters').required('Please enter your address.'),
      phoneNumber: yup
        .string()
        .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, { message: 'Please enter valid phone number.' })
        .required('Please enter your phone number.'),
      terms: yup.bool().required().oneOf([true], 'Please accept terms of use and privacy policy.'),
    });
  
    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                    const registerUser = async () => {
                        try {
                            const response = await axios.put('http://localhost:8080/auth/signup', {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                address: values.address,
                                phoneNumber: values.phoneNumber,
                                email: values.email,
                                password: values.password
                            })
                            if(response.status === 201) {
                                alert(response.data.message);
                            }
                        } catch (error) {
                            if(error.response.status === 409) {
                                setConflictEmailMsg(error.response.data.message)
                            } else {
                                setErrMessage(error.response.data.message)
                            }
                        }
                    }
                    registerUser();
                }}
                initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
                phoneNumber: '',
                terms: false
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <h1>Create Your Account</h1>
                    <p className={classes['err-message']}>{errMessage}</p>
                    <p className={classes['err-message']} type="invalid">{conflictEmailMsg}</p>
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
                    <Form.Group className={classes['form-group']} controlId="validationFormik04">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={errors.email && touched.email}
                        />
                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className={classes['form-group']} controlId="validationFormik05">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={errors.password && touched.password}
                        />
                        <Form.Control.Feedback className={classes['err-message']} type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className={classes['form-group']}>
                        <Form.Check
                        className={classes['form-check']}
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        onChange={handleChange}
                        isInvalid={errors.terms}
                        feedback={errors.terms}
                        feedbackType="invalid"
                        id="validationFormik0"
                        />
                    </Form.Group>
                    <Button className={classes.submit} variant="danger" type="submit">Create My Account</Button>
                </Form>
                )}
            </Formik>
            <p className={classes.note} >Already have an account? <Link to="?mode=login">Sign In</Link></p>
        </>
    );
}


export default RegisterForm;