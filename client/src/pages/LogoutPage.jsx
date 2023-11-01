import { redirect } from "react-router-dom";

export const action = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiration');

    setTimeout(() => {
        location.reload();
    }, 1000)
    return redirect('/');
}