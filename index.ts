// ESM
import Fastify from "fastify";
import {
  handelAirQualitySensor,
  handelHumanSensor,
  handelLightSensor,
  handelTemperatureHumiditySensor,
} from "./sensors";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.get(
  "/data/temperature-humidity-sensor",
  handelTemperatureHumiditySensor
);
fastify.get("/data/light-sensor", handelLightSensor);
fastify.get("/data/air-quality-sensor", handelAirQualitySensor);
fastify.get("/data/human-sensor", handelHumanSensor);

process.on("SIGINT", async () => {
  await fastify.close();
  process.exit(0);
});

fastify.listen({ host: "0.0.0.0", port: 3000 }, (err, address) => {
  if (err) throw err;
});
