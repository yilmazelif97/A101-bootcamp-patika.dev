//projenin çalışması için indirilen lib.ler require ile kullanıma alındı.

const express = require('express')
const app = express()
const axios = require('axios');

const jwt = require('./helper/jwt');
const errorHandler = require('./helper/errorhandler');



const endPoint = require('./routes/api');

//post requestlerimizin çalışması için kullanıldı.
app.use(express.json());
app.use(jwt())

//api sayfasına yönlendirme yapan middleware
app.use('/api',endPoint);

//proje içerisindeki herhangi bir hatayı yakalamamızı sağlayan method
app.use(errorHandler)
const port = 3000;


app.listen(port,()=>{
    console.log('Server is running');
})




