const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const path = require('path');

const log=console.log;

const app = express();
app.use(cors());
app.use(methodOverride());
app.use(express.urlencoded({extended:true}))
app.use(express.json());


let PORT = process.env.PORT || 3000;


let users = ['homero', 'bart', 'lisa', 'marge', 'maggie'];


app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"));
});


app.get('/users', (req, res) => {
	res.send(users);
});

app.post('/users/create/:nombre', (req, res) => {
	users.push(req.params.nombre);
	res.send('Usuario creado');
});

app.put('/users/update/:viejo/:nuevo', (req, res) => {
	users = users.filter(user => user !== req.params.viejo);
	users.push(req.params.nuevo);
	res.send('Usuario actualizado');
});

app.delete('/users/delete/:nombre', (req, res) => {
	users = users.filter(user => user !== req.params.nombre);
	res.send('Usuario eliminado');
});

app.listen(PORT,()=>{
    log("start server");
})