const express = require('express');
const app = express();
app.use(express.json())  //bunu kullanmayı unutma yoksa veri alamazsın json formatında


const produtRoute = require('./routes/productRoute')


app.use('/product', produtRoute)

const port =3000;

app.listen(port,()=>{

    console.log(`Server ${port} nolu porttan ayağa kalktı`)
})