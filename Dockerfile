FROM node:25-slim
WORKDIR /src

RUN npm install -g corepack --force

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install
RUN pnpm run build

EXPOSE 8080
CMD ["pnpm", "run", "preview", "--port", "8080"]