import AuthForm from "../components/Forms/AuthForm";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
    return (<>
        <AuthForm />
        <Outlet />
    </>);
}

export default AuthPage;

