const express = require('express')
const sharp = require('sharp')
const app = express()
const port = 3000

app.get('/:size', (req, res) => {
  const type = Object.keys(req.query)[0]
  const [w, h] = req.params.size.split('x')

  sharp(`./images/${type}.jpeg`)
    .resize(+w, +h)
    .toBuffer()
    .then(data => {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      res.end(data, 'binary')
    })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))