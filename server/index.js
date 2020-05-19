const express = require('express')
const app = express()
const SERVER_PORT = 3001
const msg_ctrl = require('./controllers/messages_controller')

app.use(express.json())

app.get('/api/messages', msg_ctrl.readMessages )
app.post('/api/messages', msg_ctrl.createMessage)
app.put('/api/messages/:message_id', msg_ctrl.updateMessage)
app.delete('/api/messages/:message_id', msg_ctrl.deleteMessage)

app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))