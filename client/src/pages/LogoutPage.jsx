import { redirect } from "react-router-dom";

export const action = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setTimeout(() => {
        location.reload();
    }, 100)
    return redirect('/');
}