import AuthForm from "../components/Forms/AuthForm";
import { Outlet, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

const AuthPage = () => {
    return (<>
        <AuthForm />
        <Outlet />
    </>);
}

export default AuthPage;

export const loader = () => {
    const token = getAuthToken();
    if(token) {
        return redirect('/')
    }
    return null;
}


