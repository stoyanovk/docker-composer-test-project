const app = require('express')()
const { PORT } = require('./config')
const dbPG = require('./db')

app.get('/pg', async (req, res) => {
  const result = await dbPG.one('SELECT $1 AS value', 123)
  res.send({ message: 'data was gained postgres', data: [result] })
})

async function start() {
  app.listen(PORT, () => console.log('auth server started'))
}

start()
