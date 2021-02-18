const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  console.log(req.url)

  let body = null
  try {
    const ext = req.url.split('.')[1]
    const isSvg = ext === 'svg';
    if (isSvg) {
      res.setHeader('Content-Type', 'image/svg+xml')
    }
    body = fs.readFileSync(`./public${req.url}`)
  } catch (err) {
    body = fs.readFileSync(`./public/index.html`)
  }


  // if (req.url === '/css/style.css') {
  //   body = fs.readFileSync('./public/css/style.css', 'utf8')
  // } else {
  //   body = fs.readFileSync('./public/index.html', 'utf8')
  // }

  res.end(body)

})

server.listen(3000)

console.log('Server started!')

