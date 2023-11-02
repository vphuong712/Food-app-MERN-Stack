import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
    const [ searchParams ] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isLogin])

    return (
        <div className='mt-220'>
           <Container>
                <Row>
                    <Col md={6} >
                        <img style={{width: '100%'}} src="https://static.kfcvietnam.com.vn/images/web/signin/lg/register.jpg?v=30QxoL" alt="" />
                    </Col>
                    <Col md={6} >
                        {isLogin ? <LoginForm/> : <RegisterForm/>}
                    </Col>
                </Row>
           </Container>
        </div>
    );
}

export default AuthForm