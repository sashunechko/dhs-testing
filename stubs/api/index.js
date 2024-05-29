const router = require('express').Router();

router.get('/tests-data', (request, response) => {
    response.send(require('../json/tests-data/success.json'))
  })

router.get('/results-data', (request, response) => {
    response.send(require('../json/results-data/results.json'))
  })

router.get('/records-data', (request, response) => {
    response.send(require('../json/records-data/records.json'))
  })
module.exports = router;
