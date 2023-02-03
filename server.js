const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const defaults=jsonServer.defaults({
    static:'./build',
});
const Port = process.env.PORT||3001;
server.use(defaults);
server.use(router);
server.listen(Port,()=>{
    console.log("Start");
})