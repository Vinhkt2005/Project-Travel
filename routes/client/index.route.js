const router = require('express').Router();
const tourRoutes = require("./tour.route");
const homeRoutes = require("./home.route");
const cartRoutes = require("./cart.route");
const contactRoutes = require("./contact.route");
const categoryRoutes = require("./category.route");
const searchRoutes = require("./search.route");
const orderRoutes = require("./order.route");

const settingMiddleware = require("../../middlewares/client/setting.middleware");
const categoryMiddleware = require("../../middlewares/client/category.middleware");

router.use(settingMiddleware.websiteInfo);
router.use(categoryMiddleware.list);

router.use('/', homeRoutes)
router.use('/tour', tourRoutes)
router.use('/cart', cartRoutes)
router.use('/contact', contactRoutes)
router.use('/category', categoryRoutes)
router.use('/search', searchRoutes)
router.use('/order', orderRoutes)

// 404 Error Handler
router.use((req, res) => {
    res.status(404).render('client/pages/error-404', {
        pageTitle: "404 - Trang không tồn tại"
    })
})

module.exports = router;