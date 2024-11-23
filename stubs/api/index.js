const router = require('express').Router();

const timer = (time = 300) => (req, res, next) => setTimeout(next, time);

router.use(timer());


module.exports = router;
