import { authApi } from "../../__data__/service/main-api";

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

router.post('/submit-enter', async (request, response) => {
  const data = request.body; 

  result = await login(data.email, data.password)

  response.send(result);
});

router.post('/submit-reg', async (request, response) => {
  const data = request.body; 

  result = await registration(data.email, data.password)

  response.send(result);
});

router.post('/submit-record', (request, response) => {
  const formData = request.body; 
  response.send({ success: true, message: "Record submitted successfully" });
});

router.post('/gigaChat', async (request, response) => {
  const message = request.body.message

  answer = await getGigaChatAnswer(message)

  const raw = JSON.stringify({
    "message": answer
  });

  response.send(raw)
})

async function login(email, password) {

  // const [login, loginRequest] = authApi.login()

  // result = await login(email, password)

  // console.log(result)

  // return result

  const headers = new Headers();
  headers.append("projectkey", "dhs-testing_b9HlYWwyDYwZnJ95S3feAYHcm4X");
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const raw = JSON.stringify({
    "email": email,
    "password": password,
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw
  };

  result = await fetch("https://antd-table-v2-backend.onrender.com/api/auth/login", requestOptions)
    .then((response) => {
      if (response.status == 200) {
        result = response.json()
        return {"status": "success", "user": {"name": result.name, "email": result.email}}
      } else {
        return {"status": "error", "message": response.json().message}
      }
    })
    .catch((error) => console.error(error));

  console.log(result)

  return result
}

async function registration(email, password) {

  // const [register, registerRequest] = authApi.register()

  // result = await register(email, password)

  // console.log(result)

  // return result

  const headers = new Headers();
  headers.append("projectkey", "dhs-testing_b9HlYWwyDYwZnJ95S3feAYHcm4X");
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const raw = JSON.stringify({
    "name": "anton",
    "email": email,
    "password": password,
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw
  };

  result = await fetch("https://antd-table-v2-backend.onrender.com/api/auth/register", requestOptions)
  .then((response) => {
    if (response.status == 200) {
      result = response.json()
      return {"status": "success", "user": {"name": result.name, "email": result.email}}
    } else {
      return {"status": "error", "message": response.json().message}
    }
  })
    .catch((error) => console.error(error));

  console.log(result)

  return result
}

async function getGigaChatAnswer(message) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const headersOAuth = new Headers();
  headersOAuth.append("Content-Type", "application/x-www-form-urlencoded")
  headersOAuth.append("RqUID", "679491d8-be53-4826-949f-ed5c2c785d0a");
  headersOAuth.append("Authorization", "Basic MzJhOTg3NTItZGFiZC00MzAzLWEzNjYtY2ViMDU3YjYyMGNlOjRjMzAxOWM3LTQwNDktNGE2OC1iN2E4LTMxYjk4ZjBjM2VhZQ==");

  const urlencoded = new URLSearchParams();
  urlencoded.append("scope", "GIGACHAT_API_PERS");

  const requestOptionsOAuth = {
    method: "POST",
    headers: headersOAuth,
    body: urlencoded
  };

  result = await fetch("https://ngw.devices.sberbank.ru:9443/api/v2/oauth", requestOptionsOAuth)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));

  //generate text
  const headersGenerateMessage = new Headers();
  headersGenerateMessage.append("Content-Type", "application/json");
  headersGenerateMessage.append("X-Request-ID", "79e41a5f-f180-4c7a-b2d9-393086ae20a1");
  headersGenerateMessage.append("X-Session-ID", "b6874da0-bf06-410b-a150-fd5f9164a0b2");
  headersGenerateMessage.append("X-Client-ID", "b6874da0-bf06-410b-a150-fd5f9164a0b2");
  headersGenerateMessage.append("Authorization", "Bearer " + result.access_token);  
  const raw = JSON.stringify({
    "model": "GigaChat",
    "stream": false,
    "update_interval": 0,
    "messages": [
      {
        "role": "user",
        "content": message
      }
    ]
  });
  
  const requestOptionsGenerateText = {
    method: "POST",
    headers: headersGenerateMessage,
    body: raw
  };
  
  messageResult = await fetch("https://gigachat.devices.sberbank.ru/api/v1/chat/completions", requestOptionsGenerateText)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));

  return messageResult.choices[0].message.content;
}


module.exports = router;
