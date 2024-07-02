const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    const { name, email, senha } = request.body;

    response.send(`Seja bem vindo ${name}. Enviamos a confirmação no seu e-mail (${email}), e solicitamos uma alteração da sua senha "${senha}" para algo menos racista.`);
});

module.exports = usersRoutes;