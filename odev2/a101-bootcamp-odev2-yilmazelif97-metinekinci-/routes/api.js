const express = require('express');
let router = express.Router();


const categoryEndpoint = require('../routes/category/category')

const userEndpoint = require('../routes/user/user')

//index sayfasından buraya yönlendirilen url in isteğe göre farklı endpointlere ulaşmasını sağlayan router yapısı. endpoint yapıları spesifik routerlara yönlendiriyor

router.use('/category', categoryEndpoint)

router.use('/user', userEndpoint)


/*router.use('/category', )
router.use('/posts',)
router.use('/tags')*/

module.exports = router;








