const express = require('express'); 
const router = express.Router();

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');
//const {getProduct} = require("../controllers/productController");

router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id',  deleteProduct);

module.exports = router;