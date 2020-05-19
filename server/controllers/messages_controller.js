const messages = []
let id = 0

module.exports =  {
    readMessages: (req, res) => {
        if(messages.length < 1){
            return res.status(404).send("not found.")
        }
        res.status(200).send(messages)
    },
    createMessage: (req, res) => {
        const {text, time} = req.body
        const newMessage = {id, text, time}

        messages.push(newMessage)
        id++

        res.status(200).send(messages)
    },
    updateMessage: (req, res) => {
        const {message_id} = req.params
        const {text, time} = req.body

        const index = messages.findIndex(element => element.id === +message_id )

        if(index === -1) {
            return res.status(404).send("Message not found.")
        }

        const updatedMessage ={id: +message_id, text, time}
        messages[index] = updatedMessage

        res.status(200).send(messages)
    },
    deleteMessage: (req, res) => {
        const {message_id} = req.params

        const index = messages.findIndex(element => element.id === +message_id )

        if(index === -1) {
            return res.status(404).send("Message not found.")
        }

        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}