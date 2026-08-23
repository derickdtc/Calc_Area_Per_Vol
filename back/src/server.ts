import Fastify from "fastify";
import request from "http";
const app = Fastify({ logger:true});

app.get("/", async (request, reply) => {
    return { hello: "world" };
})

app.get("/calc", getCalc);

const start = async () => {
    try {
        await app.listen({ port:3000});
        console.log("Servidor rodando na 3000");

    } catch (err) {
        app.log.error(err);
        console.log("Deu erro");
        process.exit(1);
    }

}

start();


