const youtubedl = require('youtube-dl-exec')

class YTdownloader {
    async downloadURL(url) {
        const response = await youtubedl(url, {
            dumpSingleJson: true,
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true,
            referer: url
        }).then(output => {
            return output
        })
    
        return response.requested_formats[0].url
    }

}

module.exports = YTdownloader