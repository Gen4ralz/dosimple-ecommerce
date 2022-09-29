const { validationResult } = require('express-validator');
const formidable = require('formidable');

class Product {
  async create(req, res) {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (!err) {
        const parseData = JSON.parse(fields.data);
        req.body.title = parseData.title;
        req.body.price = parseData.price;
        req.body.discount = parseData.discount;
        req.body.stock = parseData.stock;
        req.body.category = parseData.category;
        req.body.description = parseData.description;
        const errors = validationResult(req);
        if (!errors) {
        } else {
          console.log(errors.array())
          return res.status(400).json({ errors: errors.array() });
        }
      }
    });
  }
}

module.exports = new Product();
