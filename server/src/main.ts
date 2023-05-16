import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { logger } from './common/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 静态资源配置
  app.useStaticAssets(join(__dirname, '../public', '/'),{
    prefix: '/',
    setHeaders: res=>{
      res.set('Cache-Control', 'max-age=2592000')
    }
  })

  // 设置跨域
  app.enableCors({
    "origin": "*", 
    "credentials": true,    
    "allowedHeaders": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  })

  app.use(logger)

  await app.listen(3000);
}
bootstrap();
