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
    id: '6560cd267e146c038274e3ff',
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


