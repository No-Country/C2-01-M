const Product = require("../models/product.model");

class ProductRepository {
    async products () {
        const products = await Product.find();
        return products;
    }

    async productById (id) {
        const product = await Product.findById(id);
        return product;
    }

    async createProduct (payload) {
        const newProduct = await Product.create(payload);
        return newProduct;
    }

    async removeProduct (id) {
        const product = await Product.findByIdAndRemove(id);
        return product;
    }
}

module.exports = new ProductRepository;
