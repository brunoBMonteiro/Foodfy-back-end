const express = require('express')
const nunjucks = require('nunjucks')

const server = express()



server.get("/", function(res, res){
     return res.send('Hi! How is going')
})

server.listen(5000, function() {
    console.log('server is running')
} )
