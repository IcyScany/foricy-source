"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const logger_middleware_1 = require("./common/logger.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
    app.use(logger_middleware_1.logger);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map