import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Album } from "./entity/album.entity";
import { join } from "path";
const sharp = require('sharp')

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
  ){}

  // 获取数据
  async getAlbum(){
    try {
      let data = await this.albumRepository.find()
      return { msg:'Success', data }
    }
    catch(err) {
      return { msg:'Error', data: err }
    }
  }

  // 添加数据
  async addAlbum(album: Album, file){
    const date = Date.now() + '&'
    // 压缩图片
    sharp(file.buffer)
      .jpeg({quality: 30})
      .flop(false)
      .toFile(join('public/album', date + file.originalname))
    album.url = `/album/${date}${file.originalname}`
    try {
      await this.albumRepository.save(album)
      return { msg: 'Success', data: album }
    } 
    catch(err){
      return { msg: 'Error', data: err }
    }
  }
}
