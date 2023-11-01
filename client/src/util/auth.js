import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
    const storedExpiration = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpiration);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
};

export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    if(!token) {
        return;
    }
    
    const tokenDuration = getTokenDuration();
    if(tokenDuration < 0) {
        return 'EXPIRED';
    }
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


