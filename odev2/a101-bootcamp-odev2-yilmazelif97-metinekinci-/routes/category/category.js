const express = require('express')

const router = express.Router();

const categoryController = require('../../controllers/categoryController')

const tokenget = require('../../helper/errorhandler')

//router klasörü farklı modeller için controllera yönlendirme yapılması adına oluşturuldu.
//category için aşağıdaki routerlar oluşturuldu. url kısmına /.. yazıldıktan sonra kendisine atanan kontrollerı ve fonksiyonunu çalıştırıyor. 


//tokenget fonksiyonu ile üretilen tokenın doğruluğu kontrol edildi eğer token eşleşmesi sağlanmazsa get istekleri çalışmıyor.

//belirli bir id yi çekmek için kullanılan router
router.route('/category/:id').get(tokenget, categoryController.GetCategorybyID )

//tüm kategorileri çekmek için kullanılan router
router.route('/categories').get(tokenget ,categoryController.GetCategory )

//router.get('deneme/:id.:name', categoryController.deneme )


// router.post('/', userController.addUser);
// router.put('/',userController.put)
// router.delete('/',userController.fetchDelete)



//routerların export edilmesiyle bu sayfa dışında projenin başka yerlerinde routerın kullanılması sağlandı. Eğer bu export yapılmasaydı index sayfasından bağlayan cycle buraya kadar ilerleyemezdi

module.exports = router;

