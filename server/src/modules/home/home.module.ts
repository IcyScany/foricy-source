import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HomeController } from "./home.controller";
import { HomeService } from "./home.service";
import { Home } from "./entity/home.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Home])
  ],
  providers: [HomeService],
  controllers: [HomeController]
})
export class HomeModule {}
