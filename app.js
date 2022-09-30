const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express()
const port = process.env.PORT


//Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estátito

app.use(express.static("public"))

app.get('/', function (req, res) {
    res.render("home",{
        nombre: "Ezequiel",
        titulo: "Curso Node"
    })
  })



  app.get('/generic', function (req, res) {
    res.render("generic",{
        nombre: "Ezequiel",
        titulo: "Curso Node"
    })
  })


  app.get('/elements', function (req, res) {
    res.render("elements",{
        nombre: "Elements",
        titulo: "Elementos"
    })
  })

// app.get('/generic', function (req, res) {
//     res.sendFile(__dirname + "/public/generic.html")
//   })


//   app.get('/elements', function (req, res) {
//       res.sendFile(__dirname + "/public/elements.html")
//     })


  app.get('*', function (req, res) {
    res.sendFile(__dirname + "/public/404.html")
  })

app.listen( port, () =>{
    console.log(`Trabajando la app en http://localhost:${port}`)
})