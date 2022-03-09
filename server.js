//queries
const {
  getUsers,
  postUser,
  getUser,
  deleteUser
} = require('./queries.js');

//express
const express = require('express');
const app = express();
const port = process.env.PORT || 4000
//Iniciar Servidor
app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port}`);
})

//body-parser
const bodyParser = require('body-parser');

//nodemodules
app.use('/node_modules', express.static(__dirname + '/node_modules'))

//acceso a carpeta raiz
app.use('/public', express.static(__dirname + '/public'))

// bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

//Configuracion handlebars
const {
  create
} = require('express-handlebars');
app.set('view engine', 'handlebars')
const handlebars = create({
  layoutsDir: __dirname + '/views',
  partialsDir: __dirname + '/views/components'
})
app.engine('handlebars', handlebars.engine)

//moment handlebars
const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

//Ruta /
app.get('/', (req, res) => {
  getUsers().then((value) => {
    res.render('main', {
      users: value
    })
  }, (reason) => {
    console.log(reason);
  })
})

//Ruta /todos
app.get('/users', (req, res) => {
  getUsers()
    .then((value) => {
      res.json(value)
    }, (reason) => {
      console.log(reason);
    })
})

// Ruta todo-create GET
app.get('/user-create', (req, res) => {
  res.render('create', {
    layout: 'create'
  })
})

//urlencoded
app.use(express.urlencoded({
  extended: true
}))

//bodyparser
const jsonParser = bodyParser.json()

// Ruta todo-create POST
app.post('/users', jsonParser, (req, res) => {
  postUser(Object.values(req.body))
    .then((value) => {
      res.redirect('/')
    }, (reason) => {
      console.log(reason);
    })
})

//Ruta todo-delete/:id GET
app.get('/user-delete/:id', (req, res) => {
  const id = req.params.id
  getUser(id)
    .then((value) => {
      res.render('delete', {
        layout: 'delete',
        user: value
      })
    }, (reason) => {
      console.log(reason);
    })
})

//Ruta todo-delete/:id DELETE
app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  deleteUser(id)
    .then((value) => {}, (reason) => {
      console.log(reason);
    })
  return res.redirect('/')
})