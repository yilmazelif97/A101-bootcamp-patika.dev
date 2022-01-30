const http = require('http');

const jwt = require('jsonwebtoken')
const joi = require('joi');
const { join } = require('path');

//joi --> parametrelerin validasyonunu doğrulamak için kullanılan lib.
//jsonwebtoken --> güvenlik  oluşturmak için kullanılan lib. token oluşumunu sağlıyor

//kullanıcıgirişi için kullanılan method. reqdeki parametrelerin aşağıda belirtilen değerlere eşit olması halinde giriş sağlanıyor. Dinamik değil

exports.register =(req,res)=>{
    
    if(req.body.email==="elif@gmail.com"){
        res.send({
            status:true,
            message:"bu kullanıcı mevcut"
        })
    }else{
        res.send({
            status:false,
            message:"else"
        })
    }
}

//kullanıcı girişi için kullanılan method. joi ile girilen verilerin validasyonu da sağlanıyor. bu validasyondan geçen kullanıcı sisteme login olup tokenı alıyor. eğer değerler doğruysa kişiye özel token oluşturuluyor. (session mantığını düşün)

exports.login =(req,res)=>{

    const schema = joi.object().keys({
        email: joi.string().required(),
        password : joi.string().min(2).max(10).required()

    });

    schema.validate(req.body,(err,result)=>{

        if(err){
            res.send({
                message:"Error has occured"
            })
        }
        else{
            res.send({
                status:true,
                jwt:{
                token:token,
                expiresIn:'7d'
            }, user
            })
        }

    })

    //Joi dökümantasyonunda validate in fonksiyon olmadığı yazıyor, o yüzden bu kullanımı yukarıdaki ile upgrade ettim.

   /* joi.validate(req.body,schema,(err,result)=>{
        if(err){
            res.send({
                message:"Error has occured"
            })
        }
        else{
            res.send({
                status:true,
                jwt:{
                token:token,
                expiresIn:'7d'
            }, user
            })
        }
    })*/

   
   
    if(req.body.email==='elif@gmail.com'&& req.body.password==='elif'){

        const secret ="deneme"
    const user={
        id:2,
        name:'elif',
        email:'elif@gmail.com'
    }
    const token = jwt.sign(
        user,
        secret,
        {expiresIn:'7d'}
    )
    res.send({
        status:true,
        jwt:{
            token:token,
            expiresIn:'7d'
        }, user
    })
    }
    else{
        res.send({
            status:false,
            message:"böyle bir kullanıcı yok"
        })
    }

    
}

//jwt kontrolü için yazılan method

exports.jwtTest=(req,res)=>{
    res.send({
        status:true,
        message:"jwt çalıştı"
    })
}


exports.fetchUser = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.addUser = (req,res) => {
    if(req.body.username.length < 4){
        let response = {
            status: false,
            message: 'Username 4 karakterden fazla olmali.'
        }
        res.status(200).send(response)
    }else{
        let response = {
            status: true,
            message: 'İşleminiz gerçekleşti.'
        }
        res.status(200).send(response)
    }
    
}
exports.put = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.fetchDelete = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}


// function CreateaccountSchema(req,res,next){

//     //create schema object
//     const schema = {
//         email: joi.string().required(),
//         password: joi.string().min(2).max(9).required()
//     }

//     //validte request body against schema
//     const {error,value} = schema.validate(req.body,options);

//     if(error){
//         next(`Validate error: ${error.details.map(x=>x.message).join(', ')}`)
//     }
//     else{
//         //eğer error yoksa req,bodyle validasyona uğrayan değerin yerini değiştirtiyor
//         req.body=value;
//         next();
//     }


