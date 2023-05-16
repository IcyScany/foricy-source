import { Controller, Post, Get, Body, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AlbumService } from "./album.service";
import { Album } from "./entity/album.entity";

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  getAlbum(){
    return this.albumService.getAlbum()
  }

  @Post('/add')
  @UseInterceptors(FileInterceptor('file'))
  addAlbum(@Body() album: Album, @UploadedFile() file, ){
    return this.albumService.addAlbum(album, file)
  }
}
