const Category = require("../models/category.model");
const CategoryService = require("../services/categories.service");

class categoriesController {
  async createCategory(req, res) {
    try {
      const name = req.body.name.toUpperCase();

      const category = await new CategoryService().categoryCreate(name);

      res.status(201).json({
        message: "Category created successfully",
        category,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await new CategoryService().categoryGet(id);

      res.json({
        message: "Category obtained successfully",
        category,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllCategories(req, res) {
    try {
      const { limit = 5, from = 0 } = req.query;
      const query = { state: true };

      const [total, categories] = await Promise.all([
        Category.countDocuments(query),
        Category.find(query).skip(Number(from)).limit(Number(limit)),
      ]);

      return res.json({
        total,
        categories,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { state, ...data } = req.body;

      data.name = data.name.toUpperCase();

      const category = await new CategoryService().categoryUpdate(id, data);

      return res.json({
        message: "Category updated successfully",
        category,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteCategory(req, res) {
    try {
      const { id } = req.params;

      const category = await new CategoryService().categoryDelete(id);
      return res.json({
        message: "Category deleted successfully",
        category,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new categoriesController();
