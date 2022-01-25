import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from "socket.io";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3006);

  const io = new Server({ /* options */ });
  io.on("connection", (socket) => {
    console.log(socket)
  });
  io.listen(3009);
}
bootstrap();
