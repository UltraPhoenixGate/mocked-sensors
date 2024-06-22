FROM oven/bun:alpine

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY . .

EXPOSE 3000
CMD ["bun", "start"]