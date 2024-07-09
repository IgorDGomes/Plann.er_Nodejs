import fastify from "fastify";
import cors from "@fastify/cors";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

// routes
import { getLinks } from "./routes/get-links";
import { createTrip } from "./routes/create-trip";
import { createLink } from "./routes/create-link";
import { confirmTrip } from "./routes/confirm-trip";
import { getActivities } from "./routes/get-activities";
import { createActivity } from "./routes/create-activity";
import { confirmParticipants } from "./routes/confirm-participant";

const app = fastify();

app.register(cors, {
    // origin: '*'
    origin: 'http://localhost:3000'
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(createLink);
app.register(createActivity);
app.register(getActivities);
app.register(getLinks);
app.register(confirmTrip);
app.register(confirmParticipants);

app.listen({ port: 3333 }).then(() => {
    console.log("Server running!");
});