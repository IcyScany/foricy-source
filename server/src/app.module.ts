import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumModule } from './modules/album/album.module';
import { StoryModule } from './modules/story/story.module';
import { HomeModule } from './modules/home/home.module';
import DataBase from './common/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DataBase.host,
      port: DataBase.port,
      username: DataBase.Name,
      password: DataBase.Password,
      database: DataBase.Database,
      charset: 'utf8mb4',
      autoLoadEntities: true,
      synchronize: true
    }),
    AlbumModule,
    StoryModule,
    HomeModule
  ],
})
export class AppModule {}
