const express = require('express')
const app = express()
const port = 8080


//Servir contenido estátito

app.use(express.static("public"))




app.get('/messi', function (req, res) {
    res.send(" LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem  ")
  })


  app.get('*', function (req, res) {
    res.sendFile(__dirname + "/public/404.html")
  })

app.listen( port, () =>{
    console.log(`Trabajando la app en http://localhost:${port}`)
})