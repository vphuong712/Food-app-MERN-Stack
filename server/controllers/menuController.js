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

export const updateFood = async (req, res) => {
    const id = req.params.foodId;
    const imageUrl = req.body.imageUrl
    const title = req.body.title
    const price = +req.body.price
    const description = req.body.description
    console.log(req.body);

    try {
        if(imageUrl !== '' && title !== '' && description !== '' && price > 0) {
            await Menu.findOneAndUpdate({ _id: id }, {
                title: title,
                price: price,
                description: description,
                imageUrl: imageUrl
            })
            res.status(200).json({ message: 'Success!'});
        } else {
            res.status(422).json({ message: 'Invalid Input!' });   
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const deleteFood = async (req, res) => {
    const id = req.body.id;
    try {
        await Menu.findByIdAndDelete(id)
        res.status(200).json({ message: 'Success!'});
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}