"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const album_entity_1 = require("./entity/album.entity");
const path_1 = require("path");
const sharp = require('sharp');
let AlbumService = class AlbumService {
    constructor(albumRepository) {
        this.albumRepository = albumRepository;
    }
    async getAlbum() {
        try {
            let data = await this.albumRepository.find();
            return { msg: 'Success', data };
        }
        catch (err) {
            return { msg: 'Error', data: err };
        }
    }
    async addAlbum(album, file) {
        const date = Date.now() + '&';
        sharp(file.buffer)
            .jpeg({ quality: 30 })
            .flop(false)
            .toFile((0, path_1.join)('public/album', date + file.originalname));
        album.url = `/album/${date}${file.originalname}`;
        try {
            await this.albumRepository.save(album);
            return { msg: 'Success', data: album };
        }
        catch (err) {
            return { msg: 'Error', data: err };
        }
    }
};
AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(album_entity_1.Album)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map