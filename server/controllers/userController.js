import User from '../models/user.js';

export const getUser = async (req, res) => {
    const id = req.userId;
    try {
        const user = await User.findById(id);
        res.status(200).json({
            userId: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

