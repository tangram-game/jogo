const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('cliente/'))
app.listen(PORT, () => console.log(`Sevidor em execução na porta ${PORT}!`))
