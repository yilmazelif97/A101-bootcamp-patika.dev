const expressjwt = require("express-jwt");

const joi = require('joi')


//şifreleme algoritmasını kullanarak jwt doğrulaması yapmamızı sağlayan fonksiyon. secret a göre encode yapılıyor yani escret ne kadar komplike olursa o kadar güçlü bir token oluşturulur. 

const secret = "deneme";

module.exports=jwt;

function jwt() {
  return expressjwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/user/login"],
  });
};
