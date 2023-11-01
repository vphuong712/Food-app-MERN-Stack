const isAdmin = async (req, res, next) => {
    const adminId = '6541c1a07717758903ca179e';
    const adminEmail = 'admin@admin.com';
    if(req.userId !== adminId || req.email !== adminEmail) {
        const error = new Error('Unauthorized');
        error.statusCode = 401;
        throw error;
    }
    next();
};

export default isAdmin;