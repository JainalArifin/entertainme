const express = require('express')
const app = express()
const axios = require('axios');

app.get('/entertainme', (req, res) => {
  console.log('--------> 1');
  axios.get('http://localhost:3001/movies/')
  .then(({ data }) => {
    console.log('-----------> 2', data)
    var dataMovie = data

    axios.get('http://localhost:3002/tv')
    .then(({ data }) => {
      console.log('-------> 3', data);
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

})

app.listen(3000, () => {
  console.log('listen port:3000');
})
