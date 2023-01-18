import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule );

  //swagger init
  const config = new DocumentBuilder()
    .setTitle('Advanced backend')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('redgreenfox')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  //add global guards
  //app.useGlobalGuards();

  //add global pipes
  //app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start();