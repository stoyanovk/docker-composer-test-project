const app = require('express')()
const { PORT } = require('./config')
const dbPG = require('./db')

app.get('/', async (req, res) => {
  res.send({ message: 'auth service -- ' })
})

app.get('/api/me', async (req, res) => {
  res.send({ name: 'John', age: 21, id: 0002 })
})

app.get('/pg', async (req, res) => {
  const result = await dbPG.one('SELECT $1 AS value', 123)
  res.send({ message: 'data was gained postgres', data: [result] })
})

async function start() {
  app.listen(PORT, () => console.log('auth server started'))
}

start()
