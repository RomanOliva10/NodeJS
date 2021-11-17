const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');


const app = express();
app.use(cors());
app.use(methodOverride());
const log=console.log;

let users = ['homero', 'bart', 'lisa', 'marge', 'maggie'];


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

app.listen(5000,()=>{
    log("start server");
})