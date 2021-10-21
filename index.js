const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')


app.use(cors())
app.get('/', (req, res) => {
  res.send(`
  
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <!-- Or if you want a more recent alpha version -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/hls.js@alpha"></script> -->
    <video id="video"></video>
    <script>
        var video = document.getElementById('video');
        var videoSrc = 'http://190.107.19.188/hls/live/output.m3u8';
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
        }
        // HLS.js is not supported on platforms that do not have Media Source
        // Extensions (MSE) enabled.
        //
        // When the browser has built-in HLS support (check using ),
        // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
        // element through the  property. This is using the built-in support
        // of the plain video element, without using HLS.js.
        //
        // Note: it would be more normal to wait on the 'canplay' event below however
        // on Safari (where you are most likely to find built-in HLS support) the
        // video.src URL must be on the user-driven white-list before a 'canplay'
        // event will be emitted; the last video event that can be reliably
        // listened-for when the URL is not on the white-list is 'loadedmetadata'.
        else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = videoSrc;
        }
    </script>
</body>

</html>
  
  
  `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})