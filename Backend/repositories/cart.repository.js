const Cart = require('../models/cart.model');

class cartRepository { 
    async cart () {
        const carts = await Cart.find()
            .populate({
                path: "items.productId",
                select: "name price total",
          });

          return carts[0];
    }

    async addItem (payload) {
        const newItem = await Cart.create(payload);

        console.log(newItem, 'newItem from cartRepository');
        return newItem;
    }
}

module.exports = new cartRepository;