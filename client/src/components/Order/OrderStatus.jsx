import classes from './OrderStatus.module.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Table from 'react-bootstrap/Table';
import { useLoaderData } from 'react-router-dom';
import { formatPrice } from '../../util/format';

const OrderStatus = () => {
    const data = useLoaderData();
    console.log(data);
    const rows = data.map(row => {
        return (
            <tr key={row._id}>
            <td>{row._id}</td>
            <td>
                <ul>
                    {row.orderItems.map(item => <li key={item.foodId._id} >{item.foodId.title} x{item.quantity}</li>)}
                </ul>
                Total: {formatPrice(row.totalPrice)}đ
            </td>
            <td>
                <ul>
                    <li>Receiver: {row.receiver}</li>
                    <li>Address: {row.address}</li>
                    <li>Phone Number: {row.phoneNumber}</li>
                </ul>
            </td>
            <td>{row.status}</td>
            </tr>            
        );
    })

    return (
        <Container>
            <Row>
                <Col sm={12} >
                    <h1 className={classes.heading} >Order Status</h1>
                    <Table className={classes['order-status']} bordered hover>
                        <thead>
                            <tr>
                            <th>OrderId</th>
                            <th>Ordered</th>
                            <th>Receiver</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderStatus;