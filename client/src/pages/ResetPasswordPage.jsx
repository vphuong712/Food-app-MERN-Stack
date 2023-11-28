import ResetPassword from "../components/Forms/ResetPassword";
import { redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

const ResetPasswordPage = () => {
    return <div className="mt-220" >
        <ResetPassword />
    </div>;
}

export default ResetPasswordPage;

export const loader = () => {
    const token = getAuthToken();
    if(!token || token === 'EXPIRED') {
        return redirect('/')
    }
    return null;
  
}