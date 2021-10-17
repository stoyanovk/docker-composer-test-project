const app = require('express')()
const { PORT, MONGO_URL, AUTH_API_URL } = require('./config')
const { connect } = require('./db')
const Posts = require('./model/posts')
const axios = require('axios')

app.get('/', async (req, res) => {
  res.send({ message: 'main 11' })
})

app.get('/current-user', async (req, res) => {
  try {
    const { data } = await axios.get(`${AUTH_API_URL}/me`)
    res.json(data)
  } catch (e) {
    res.send({ message: 'something went wrong', url: AUTH_API_URL })
  }
})

app.get('/mongo', async (req, res) => {
  const posts = await Posts.find()
  console.log('mongo data')
  res.send({ message: 'data was gained from mongo', data: posts })
})

const db = connect(MONGO_URL)

db.on('error', console.error)
db.on('disconnected', () => connect(MONGO_URL))
db.once('open', async function () {
  app.listen(PORT, () => {
    console.log(`server start on port:${PORT}`)
  })
})
