import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

const bootstrap = async () => {
  const PORT = process.env.PORT || 5500;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
};
bootstrap();
