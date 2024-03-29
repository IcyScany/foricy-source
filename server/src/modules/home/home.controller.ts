import { Controller, Get } from "@nestjs/common";
import { HomeService } from "./home.service";

@Controller('home')
export class HomeController{
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHome(){
    return this.homeService.getHome()
  }
}
