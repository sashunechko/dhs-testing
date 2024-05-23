const router = require('express').Router();

router.get('/tests-data', (request, response) => {
    response.send(require('../json/tests-data/success.json'))
  })

module.exports = router;
