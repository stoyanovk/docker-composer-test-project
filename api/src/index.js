const app = require('express')()
const {
  PORT,
  MONGO_URL
  // POSTGRES_USER,
  // POSTGRES_PASSWORD,
  // POSTGRES_HOST,
  // POSTGRES_PORT,
  // POSTGRES_DB
} = require('./config')
const { connect } = require('./db')
const Posts = require('./model/posts')
console.log(MONGO_URL, 'MONGO_URL')
// const dbPG = pgp({
//   host: POSTGRES_HOST,
//   port: POSTGRES_PORT,
//   database: POSTGRES_DB,
//   user: POSTGRES_USER,
//   password: POSTGRES_PASSWORD
// })

app.get('/', async (req, res) => {
  res.send({ message: 'main' })
})

app.get('/mongo', async (req, res) => {
  const posts = await Posts.find()
  console.log('mongo data')
  res.send({ message: 'data was gained from mongo', data: posts })
})

app.get('/pg', async (req, res) => {
  const result = await db.one('SELECT $1 AS value', 123)
  res.send({ message: 'data was gained postgres', data: [result] })
})

const db = connect(MONGO_URL)

db.on('error', console.error)
db.on('disconnected', () => connect(MONGO_URL))
db.once('open', async function () {
  app.listen(PORT, () => {
    console.log(`server start on port:${PORT}`)
  })
})
