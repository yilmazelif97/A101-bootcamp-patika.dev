const express = require("express");
const categoryservice = require("../services/categoryService");

//tüm kategorileri çekmek için kullanılan method

exports.GetCategory = async (req, res) => {
  const response = await categoryservice.fetchCategories();
  res.send({
    status: true,
    message: "Category Controllerdasın",
    data: response.categories,
  });
};


//belirli bir id yi çekmek için yazılan meyhod.

exports.GetCategorybyID = async (req, res) => {

  
  const response = await categoryservice.fetchSingleCategory(req.params.id);

    res.send({
      //status: true,
      //message: "Single kategori func",
      data: response
    });

 
};

//request verilerinin alınım alınmadığının kontrolü için yazıldı

exports.deneme = async (req, res) => {

    console.log(req.params.id);
    console.log(req.params.name)

    const send = res.send(req.params)

    console.log(send)

  };