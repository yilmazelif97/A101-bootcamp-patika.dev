const express = require("express");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

const productService = require("../services/productService");

//service ve frontend(postman)den gelen istek-cevapların buluştuğu endpointler

exports.addProduct = async (req, res) => {
  const response = await productService.add(req.body);

  console.log(req.body);
  console.log(req.body.isDiscount);

  res.send(response);
};

exports.getAllProduct = async (req, res) => {
  const response = await productService.getAll();

  res.send(response);
};

exports.getSingleProduct = async (req, res) => {
  const response = await productService.getSingle(req.params);

  console.log(req.params);

  res.send(response);
};


exports.getDiscount = async(req,res)=>{
    const response = await productService.getDiscount();
    res.send(response)
}

exports.deleteProduct = async(req,res)=>{
    const response = await productService.delete(req.params);
    console.log(req.params)
    res.send(response)
}

exports.updateProduct = async(req,res)=>{
  const response = await productService.update(req.body);
  res.send(response)
}