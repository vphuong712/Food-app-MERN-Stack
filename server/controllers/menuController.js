import Menu from "../models/menu.js";

export const getMenu = async (req, res) => {
    try {
        const foodMenu = await Menu.find();
        res.status(200).json(foodMenu);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getFoodById = async (req, res) => {
    const id = req.params.foodId;
    try {
        const food = await Menu.findById(id);
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const createFood = async (req, res) => {
    const imageUrl = req.body.imageUrl
    const title = req.body.title
    const price = +req.body.price
    const description = req.body.description
    console.log(typeof price);
    console.log(req.body);

    try {
        if(price) {
            const food = new Menu({
                title: title,
                price: price,
                description: description,
                imageUrl: imageUrl
            })
            await food.save();
            res.status(201).json({ message: 'Success!'});
        }
    } catch (error) {
        res.status(500).json(error);
    }
};