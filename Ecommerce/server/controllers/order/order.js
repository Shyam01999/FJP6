const db = require("../../models/index");
const Order = db.Order;

const newOrder = async (req, res) => {
    try {
        const { shippingInfo, orderItems, paymentInfo, itemPrice, taxPrice, shippingPrice, totalPrice } = req.body;

        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt:Date.now(),
            user: req.user.id,
        })

        if (order) {
            res.status(201).json({ message: "Order Created Successfully", order })
        }
        else {
            res.status(500).json({ message: "Order not created" })
        }
    }
    catch (error) {
        console.log('Error in creating new order:', error);
        res.status(500).json({ error: "Internal Server Error" })

    }
}

module.exports  = {
    newOrder
};