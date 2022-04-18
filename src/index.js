const express = require('express')
const youtubedl = require('youtube-dl-exec')

const app = express()

app.use(express.json())

app.get('', async (req, res) => {
    const response = await youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg', {
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: 'https://www.youtube.com/watch?v=6xKWiCMKKJg'
    }).then(output => {
        return output
    })

    const downloadUrl = response.requested_formats[0].url
    res.redirect(downloadUrl)
})

app.listen(3000)