const express = require('express')
const YTdownloader = require('./controller/YTdownloader')

const app = express()

app.use(express.json())

app.post('/download', async (req, res) => {
    const YT = new YTdownloader()
    const downloadURL = await YT.downloadURL(req.body.url)
    res.send({downloadURL})
})

app.listen(3000)