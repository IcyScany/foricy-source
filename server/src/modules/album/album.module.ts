import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";
import { Album } from "./entity/album.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Album])
  ],
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumModule {}
