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

  router.post('/submit-record', (request, response) => {
    const formData = request.body; 
    response.send({ success: true, message: "Record submitted successfully" });
  });
   
module.exports = router;
