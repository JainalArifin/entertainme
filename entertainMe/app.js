const express = require('express')
const app = express()
const axios = require('axios');
var responseTime = require('response-time')
var redis = require("redis"),
  client = redis.createClient()

app.use(responseTime())

client.on("connect", function () {
    console.log("connected ");
})

app.get('/entertainme', async (req, res) => {
  // console.log('--------> 1');
  function coy() {
    return new Promise(function(resolve, reject) {
      client.get('testTv', function(err, res) {
        if (!err) {
          resolve(res)
        } else {
          reject(err)
        }
      })
    });
  }

  const x = await coy()

  // console.log('--------- ini --->', coy);

  if (x) {
    console.log('ini coy----', JSON.parse(x))
    res.send( JSON.parse(x) )
  } else {
    axios.get('http://localhost:3001/movies/')
    .then(({ data }) => {
      // console.log('-----------> 2', data)
      var dataMovie = data

      axios.get('http://localhost:3002/tv')
      .then(({ data }) => {
        // console.log('-------> 3', data);
        client.set("testTv", JSON.stringify({
          movies:dataMovie,
          series: data
        }))
        res.send({
          movies:dataMovie,
          series: data
        })
      })
      .catch((err) => {
        res.send(err)
      })
    })
    .catch((err) => {
      res.send(err)
    })
  }
})

app.listen(3000, () => {
  console.log('listen port:3000');
})
