import { redirect } from "react-router-dom";

export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    return token;
}


export const adminInfo = {
    id: '6541c1a07717758903ca179e',
    email: 'admin@admin.com'
}

export const checkAdmin = (user) => {
    const token = getAuthToken();
    if(token) {
        if(user.userId === adminInfo.id && user.email === adminInfo.email) {
            return true;
        };
    }
    return false;
};


