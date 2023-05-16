"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const https = require("https");
const express = require("express");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const logger_middleware_1 = require("./common/logger.middleware");
const port = 3000;
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '../SSL/www.scany.site.key')),
    cert: fs.readFileSync(path.join(__dirname, '../SSL/www.scany.site.crt')),
};
async function bootstrap() {
    const server = express();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.use(logger_middleware_1.logger);
    app.useStaticAssets((0, path_1.join)(__dirname, '../public', '/'), {
        prefix: '/',
        setHeaders: res => {
            res.set('Cache-Control', 'max-age=2592000');
        }
    });
    app.enableCors({
        "origin": "*",
        "credentials": true,
        "allowedHeaders": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    });
    await app.init();
    https.createServer(httpsOptions, server).listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map