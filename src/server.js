const express = require('express');

const routes =  require('./routes');

const app = express();
/* traduza a requisição para o tipo JSON */
app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));


