"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const album_module_1 = require("./modules/album/album.module");
const story_module_1 = require("./modules/story/story.module");
const home_module_1 = require("./modules/home/home.module");
const config_1 = require("./common/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: config_1.default.host,
                port: config_1.default.port,
                username: config_1.default.Name,
                password: config_1.default.Password,
                database: config_1.default.Database,
                charset: 'utf8mb4',
                autoLoadEntities: true,
                synchronize: true
            }),
            album_module_1.AlbumModule,
            story_module_1.StoryModule,
            home_module_1.HomeModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map