const http = require("http") ;
const server = http.createServer((req,res)=>{
  if(req.url==="/") res.end(`<h1>Welcome to the home page</h1>`) ; 
  else if(req.url==="/about") res.end(`<h1>Here is our story</h1>`) ; 
  else res.end("fuck you bitch !!!")
})
server.listen(5000) ; 