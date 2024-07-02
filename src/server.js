const express = require('express');

const app = express();

/* Route Params*/
app.get('/polls', (request, response) => {
    response.send(`Escolha uma enquete ou crie uma nova.`)
});

app.get("/polls/:user/:id", (req, res) => {
    const { user, id } = req.params;

    res.send(`Você está na enquete do ${user} que é sobre ${id}.`)
});

/* Query Params */
app.get("/enquete", (request, response) => {
    const {criador, assunto} = request.query;

    response.send(`Você está na enquete do ${criador} que é sobre ${assunto}.`)
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));


