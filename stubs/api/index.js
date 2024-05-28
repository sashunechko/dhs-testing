const router = require('express').Router();

router.get('/tests-data', (request, response) => {
    response.send(require('../json/tests-data/success.json'))
  })

router.get('/results-data', (request, response) => {
    response.send(require('../json/results-data/results.json'))
  })

module.exports = router;
