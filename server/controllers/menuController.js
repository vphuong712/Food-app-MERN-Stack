import Menu from "../models/menu.js";

export const getMenu = async (req, res) => {
    try {
        const foodMenu = await Menu.find();
        console.log('foodMenu', foodMenu);
        res.status(200).json(foodMenu);
    } catch (error) {
        res.status(500).json(error);
    }
}