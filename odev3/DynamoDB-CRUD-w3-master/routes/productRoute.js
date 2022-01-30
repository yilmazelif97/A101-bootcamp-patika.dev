const express = require("express");
const Router = require("router");
var bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json())

//Yönlendirme

var router = Router();

const productController = require("../controllers/productController");

router.post('/add', productController.addProduct )
router.get('/getall', productController.getAllProduct)
router.get('/get/:productID', productController.getSingleProduct)
router.get('/getdiscount', productController.getDiscount)
router.delete('/delete/:productID', productController.deleteProduct)
router.put('/update', productController.updateProduct)


module.exports = router;
