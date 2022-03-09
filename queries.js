//require
require('dotenv').config('/')
const {
  values
} = require('lodash')
const {
  Client
} = require('pg')

//Client
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

//getTodos
const getUsers = async () => {
  //Client
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  await client.connect()
  const res = await client.query('SELECT * FROM users')
  await client.end()
  return res.rows
}

//generarquery
const generarQuery = (name, text, values) => {
  return {
    name,
    text,
    values
  }
}

//postTodo
const postUser = async (datos) => {
  //Client
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  datos.push(new Date().toISOString())
  await client.connect()
  const name = "insertar"
  const text = "INSERT INTO users (username, email, password , fecha_creacion) values($1, $2, $3, $4)"
  const values = datos
  const res = await client.query(generarQuery(name, text, values))
  await client.end()
  return res.rows
}

//getTodos
const getUser = async (id) => {
  //Client
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  await client.connect()
  const name = "ConsultarId"
  const text = "SELECT * FROM users WHERE id=$1"
  const values = [id]
  const res = await client.query(generarQuery(name, text, values))
  await client.end()
  return res.rows[0]
}

//deleteTodo
const deleteUser = async (id) => {
  //Client
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  await client.connect()
  const name = "deleteId"
  const text = "DELETE FROM users WHERE id=$1"
  const values = [id]
  const res = await client.query(generarQuery(name, text, values))
  await client.end()
  return res.rows[0]
}

module.exports = {
  getUsers,
  postUser,
  getUser,
  deleteUser
}