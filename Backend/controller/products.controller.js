const Product = require("../models/product.model");

class productController {
	async createProduct(req, res) {
		try {
			const { state, user, ...body } = req.body;

			const productDB = await Product.findOne({ title: body.title });

			if (productDB) {
				return res.status(400).json({
					message: `The product ${productDB.title}, already exist`,
				});
			}

			const data = {
				...body,
				title: body.title.toUpperCase(),
				user: req.params.id,
			};

			const product = new Product(data);

			await product.save();

			res.status(201).json({
				message: 'Product created successfully',
				product
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json(error);
		}
	}

	async getProduct(req, res) {
		try {
			const product = await Product.findById(req.params.id);

			res.json(product);
		} catch (error) {
			return res.status(500).json(error);
		}
		
	}

	async getAllProducts(req, res) {
		try {
			const { limit = 5, from = 0 } = req.query;
			const query = { state: true };

			const [total, products] = await Promise.all([
				Product.countDocuments(query),
				Product.find(query)

					.skip(Number(from))
					.limit(Number(limit)),
			]);

			res.json({
				total,
				products,
			});
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	async updateProduct(req, res) {
		try {
			const { id } = req.params;
			const { state, user, ...data } = req.body;

			if (data.name) {
				data.name = data.name.toUpperCase();
			}

			data.user = req.user._id;

			const product = await Product.findByIdAndUpdate(id, data, { new: true });

			res.status(200).json({
				message: 'Product updated successfully',
				product
			});
		} catch (error) {
			return res.status(500).json(error);
		}
	}

	async deleteProduct(req, res) {
		try {
			const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, { state: false }, { new: true });

		res.status(200).json({
			message: 'Product deleted successfully',
			product
		});
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

module.exports = new productController();