const formidable = require('formidable');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Product {
  async create(req, res) {
    const form = formidable({ multiples: true });
    const __dirname = path.resolve();
    const newPath = form.parse(req, (err, fields, files) => {
      if (!err) {
        const parseData = JSON.parse(fields.data);
        const errors = [];
        if (parseData.title.trim().length === 0) {
          errors.push({ title: 'Title is required!' });
        }
        if (parseInt(parseData.price) < 1) {
          errors.push({ price: 'Price should above 1฿' });
        }
        if (parseInt(parseData.discount) < 0) {
          errors.push({ discount: 'Discount should not be negative' });
        }
        if (parseInt(parseData.stock) < 0) {
          errors.push({ stock: 'Stock should not be negative' });
        }
        if (fields.description.trim().length === 0) {
          errors.push({ discription: 'Description is required!' });
        }
        if (errors.length === 0) {
          if (!files['image1']) {
            errors.push({ image1: 'Image1 is required' });
          }
          if (!files['image2']) {
            errors.push({ image2: 'Image2 is required' });
          }
          if (!files['image3']) {
            errors.push({ image3: 'Image3 is required' });
          }
          if (errors.length === 0) {
            for (let i = 0; i < Object.keys(files).length; i++) {
              const mimeType = files[`image${i + 1}`].mimetype; // log = image/jpeg
              const extension = mimeType.split('/')[1].toLowerCase(); // log = jpeg
              if (
                extension === 'jpeg' ||
                extension === 'jpg' ||
                extension === 'png'
              ) {
                const imageName = uuidv4() + `.${extension}`;
                const __dirname = path.resolve();
                const newPath =
                  __dirname + `/../frontend/public/images/${imageName}`;
                fs.copyFile(files[`image${i + 1}`].filepath, newPath, (err) => {
                  if (!err) {
                    console.log('image upload');
                  }
                });
              } else {
                const error = {};
                error[`image${i + 1}`] = `image${
                  i + 1
                } has invalid ${extension} type`;
                errors.push(error);
              }
            }
          } else {
            return res.status(400).json({ errors });
          }
        } else {
          return res.status(400).json({ errors });
        }
        console.log('errors: ', errors);
      }
    });
  }
}

module.exports = new Product();
