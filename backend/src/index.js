const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

//Query Params: request.query (Filtros, ordenação, paginação, ...) [Get]
//Route Params: request.params (Identificar um recurso na alteração ou remoção) [Put, Delete]
//Body: request.body (Dados para criação ou alteração de um registro) [Post, Put]
//MongoDB (Banco de dados Não-relacional)


const app = express();

mongoose.connect('mongodb+srv://Nakkat:TVxZVjjn@cluster0-qufb8.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
});

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);


// app.get('/users', (request, response) => {
//     console.log(request.query)
// 	return response.json({message: 'Hello Bruno'});
// }); 

// app.delete('/users/:id', (request, response) => {
//     console.log(request.params)
// 	return response.json({message: 'Hello Bruno'});
// }); 

// app.put('/users/:id', (request, response) => {
//     console.log(request.params)
// 	return response.json({message: 'Hello Bruno'});
// }); 

// app.post('/users', (request, response) => {
//     console.log(request.body)
// 	return response.json({message: 'Hello Bruno'});
// }); 

app.listen(3333);