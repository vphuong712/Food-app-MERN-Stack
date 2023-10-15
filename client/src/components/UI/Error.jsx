import classes from './Error.module.css';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    let errorStatus = error.status;
    let errorMessage = error.data;
    if(error.response) {
        errorStatus = error.response.status;
        errorMessage = error.response.message;
    }
    return <div className={classes.error} >
        <h1>{`${errorStatus} Error!`}</h1>
        <p>{errorMessage}</p>
    </div>
}

export default Error;