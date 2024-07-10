import fastify from "fastify";
import cors from "@fastify/cors";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

// routes
import { getLinks } from "./routes/get-links";
import { updateTrip } from "./routes/update-trip";
import { createTrip } from "./routes/create-trip";
import { createLink } from "./routes/create-link";
import { confirmTrip } from "./routes/confirm-trip";
import { createInvite } from "./routes/create-invite";
import { getActivities } from "./routes/get-activities";
import { getParticipant } from "./routes/get-participant";
import { createActivity } from "./routes/create-activity";
import { getTripDetails } from "./routes/get-trip-details";
import { getParticipants } from "./routes/get-participants";
import { confirmParticipants } from "./routes/confirm-participant";

import { env } from "./env";
import { errorHandle } from "./error-handler";

const app = fastify();

app.register(cors, {
    // origin: '*'
    origin: 'http://localhost:3000'
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandle)

app.register(createTrip);
app.register(createLink);
app.register(createInvite);
app.register(createActivity);
app.register(getTripDetails);
app.register(getLinks);
app.register(getActivities);
app.register(getParticipant);
app.register(getParticipants);
app.register(confirmTrip);
app.register(confirmParticipants);
app.register(updateTrip);

app.listen({ port: env.PORT }).then(() => {
    console.log("Server running!");
});