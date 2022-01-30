const http = require('http');

//web sunucu oluştururken request ve response objeleri kullanılr.

const server = http.createServer((req,res)=>{

    const url = req.url;

    if(url === '/about'){
        res.write("About Page");
    }
    else if(url ==='/'){
        res.write("home Page")
    }
    else{
        res.write("Contact page")
    }

    console.log('bir istek gönderildi');
    res.end();
});

//sunucu için kendi pcmiz kullanılacako yüzden hangi port olduğunu yazmalısın.

//port bilgisi değişkene atanıyor, 3000den ayağa kalkıyor 

const port =3000;

server.listen(port,()=>{
    console.log( `sunucu ${port} da başlatıldı`)
});


