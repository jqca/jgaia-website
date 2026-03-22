FROM node:20-slim
WORKDIR /app

RUN npm install -g pnpm serve

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY artifacts/jgaia/package.json ./artifacts/jgaia/package.json

RUN pnpm install --no-frozen-lockfile

COPY . .

RUN pnpm --filter @workspace/jgaia run build

EXPOSE 3000
ENV PORT=3000

CMD ["serve", "artifacts/jgaia/dist", "-l", "3000"]
