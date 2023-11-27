const isAdmin = async (req, res, next) => {
    const adminId = '6560cd267e146c038274e3ff';
    const adminEmail = 'admin@admin.com';
    if(req.userId !== adminId || req.email !== adminEmail) {
        const error = new Error('Unauthorized');
        error.statusCode = 401;
        throw error;
    }
    next();
};

export default isAdmin;