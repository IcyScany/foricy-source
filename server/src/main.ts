import * as fs from 'fs'
import * as path from 'path'
import * as https from 'https'
import * as express from 'express';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { logger } from './common/logger.middleware'; 

const port = 3000 
// 配置https
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../SSL/www.scany.site.key')),
  cert: fs.readFileSync(path.join(__dirname, '../SSL/www.scany.site.crt')),
};
 
async function bootstrap() {
  const server = express()

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server)
    );

  // 设置logger
  app.use(logger)

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
 
  await app.init()

  https.createServer(httpsOptions, server).listen(port)
  // await app.listen(port);
}
bootstrap();
 
