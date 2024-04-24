const db = require("../../models/index");
const Order = db.Order;

//new order
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
            paidAt: Date.now(),
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

//single order
const getSingleOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (!order) {
            res.status(404).json({ message: `Order not found with id ${id}.` })
        }

        res.status(200).json({ success: true, order });
    }
    catch (error) {
        console.log('Error in fetching order details:', error);
        res.status(500).json({ error: "Internal Server Error" })

    }
}

//multiple order
const myOrderDetails = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { user: req.user.id } });
        

        if (!orders) {
            res.status(404).json({ message: `Order not found with this user.` })
        }

        res.status(200).json({ success: true, orders });

    }
    catch (error) {
        console.log('Error in fetching order details:', error);
        res.status(500).json({ error: "Internal server Error" })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ where: { id: req.params.id } });
        

        if (!order) {
            res.status(404).json({ message: `Order not found with this id ${req.params.id}.` })
        }

        // Delete the order
        await order.destroy();

        res.status(200).json({ message: `Order with ID ${req.params.id} deleted successfully`});

    }
    catch (error) {
        console.log('Error in fetching order details:', error);
        res.status(500).json({ error: "Internal server Error" })
    }
}

module.exports = {
    newOrder,
    getSingleOrder,
    myOrderDetails,
    deleteOrder
};