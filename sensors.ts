import type { FastifyReply, FastifyRequest } from "fastify";

// 温湿度传感器
export function handelTemperatureHumiditySensor(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Mock 温湿度 温度20-30 湿度40-60 保留一位小数
  const temperature = (Math.random() * 10 + 20).toFixed(1);
  const humidity = (Math.random() * 20 + 40).toFixed(1);
  reply.send({
    data: {
      temperature,
      humidity,
    },
    labels: {},
  });
}

// 光照传感器
export function handelLightSensor(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Mock 光照 0-1000
  const light = Math.floor(Math.random() * 1000);
  reply.send({
    data: {
      light,
    },
    labels: {},
  });
}

// 空气质量传感器
export function handelAirQualitySensor(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Mock pm2.5 0-100
  // Mock pm10 0-100
  // Mock 甲醛 0-100
  const pm25 = Math.floor(Math.random() * 100);
  const pm10 = Math.floor(Math.random() * 100);
  const formaldehyde = Math.floor(Math.random() * 100);

  reply.send({
    data: {
      pm25,
      pm10,
      formaldehyde,
    },
    labels: {},
  });
}

// 人体红外传感器
export function handelHumanSensor(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Mock 人体传感器 0-1
  const human = Math.random() > 0.5 ? 1 : 0;
  reply.send({
    data: {
      human,
    },
    labels: {},
  });
}
