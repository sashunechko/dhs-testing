const { response } = require('express');
const router = require('express').Router();

router.get('/tests-data', (request, response) => {
    response.send(require('../json/tests-data/success.json'))
  })

router.get("/users-data", (request, response) => {
    response.send(require("../json/users-data/success.json"))
})

router.get('/results-data', (request, response) => {
    response.send(require('../json/results-data/results.json'))
  })

router.get('/records-data', (request, response) => {
    response.send(require('../json/records-data/records.json'))
  })

  router.get('/users-data', (request, response) => {
    response.send(require('../json/users-data/success.json'))
  })

  router.post('/submit-enter', (request, response) => {
    const data = request.body; 
    response.send({ success: true, message: "Вы успешно вошли в аккаунт!" });
  });

  router.post('/submit-reg', (request, response) => {
    const data = request.body; 
    response.send({ success: true, message: "Регистрация прошла успешно!" });
  });

module.exports = router;
