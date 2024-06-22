import type { FastifyReply, FastifyRequest } from "fastify";

// 全局变量保存上一次的数据
let lastTemperature = 25;
let lastHumidity = 50;
let lastLight = 500;
let lastPm25 = 50;
let lastPm10 = 50;
let lastFormaldehyde = 50;

// 辅助函数，用于生成平滑变化的数据
function smoothRandom(
  lastValue: number,
  range: number,
  minValue: number,
  maxValue: number
): number {
  const change = (Math.random() - 0.5) * range; // 随机变化量，范围是 [-range/2, range/2]
  let newValue = lastValue + change;

  // 限制数据在[minValue, maxValue]范围内
  if (newValue < minValue) newValue = minValue;
  if (newValue > maxValue) newValue = maxValue;

  return newValue;
}

// 温湿度传感器
export function handelTemperatureHumiditySensor(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // Mock 温湿度 温度20-30 湿度40-60 保留一位小数
  lastTemperature = smoothRandom(lastTemperature, 2, 20, 30);
  lastHumidity = smoothRandom(lastHumidity, 4, 40, 60);

  reply.send({
    data: {
      temperature: lastTemperature.toFixed(1),
      humidity: lastHumidity.toFixed(1),
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
  lastLight = smoothRandom(lastLight, 100, 0, 1000);

  reply.send({
    data: {
      light: Math.floor(lastLight),
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
  lastPm25 = smoothRandom(lastPm25, 10, 0, 100);
  lastPm10 = smoothRandom(lastPm10, 10, 0, 100);
  lastFormaldehyde = smoothRandom(lastFormaldehyde, 10, 0, 100);

  reply.send({
    data: {
      pm25: Math.floor(lastPm25),
      pm10: Math.floor(lastPm10),
      formaldehyde: Math.floor(lastFormaldehyde),
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
