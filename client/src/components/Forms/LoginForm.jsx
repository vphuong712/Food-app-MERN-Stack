import classes from './LoginForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../UI/Loading';


const LoginForm = () => {
    const { Formik } = formik;

    const navigate = useNavigate();
    
    const schema = yup.object().shape({
      email: yup.string().max(50, 'Your Email must be under 50 characters').email('Please enter a valid email address.').required('Please enter your email address.'),
      password: yup.string().min(8, 'Your password must be at least 8 characters!').required('Please enter your password.'),
    });

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

  
    return (
        <>
            {isLoading ? <div className={classes.loading} >
                <Loading />
            </div> : 
            <>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => {
                        const login = async () => {
                            setIsLoading(true);
                            try {
                                const response = await axios.post('http://localhost:8080/auth/login',
                                {
                                    email: values.email,
                                    password: values.password,
                                }
                                )
                                if(response.status === 200) {
                                    setIsLoading(false);
                                    const resData = response.data;
                                    console.log(resData);
                                    localStorage.setItem('token', resData.token);
                                    localStorage.setItem('userId', resData.userId);
                                    navigate('/')
                                    setTimeout(() => {
                                        location.reload();
                                    }, 100)
                                }
                            } catch (error) {
                                setIsLoading(false);
                                if(error.response.status === 401) {
                                    setMessage(error.response.data.message);
                                }
                            }
                        }
                        login();
                    }}
                    initialValues={{
                    email: '',
                    password: '',
                    }}
                >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p className={classes['err-message']} >{message}</p>
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
                        <Button className={classes.submit} variant="success" type="submit">Login</Button>
                    </Form>
                    )}
                </Formik>
                <p className={classes.note} >Haven’t got an account? <Link to="?mode=register">Sign Up</Link></p>
            </>}
        </>
    );
}

export default LoginForm;
