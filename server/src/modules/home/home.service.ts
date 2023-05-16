import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Home } from "./entity/home.entity";

@Injectable()
export class HomeService{
  constructor(
    @InjectRepository(Home)
    private readonly homeRepository: Repository<Home>
  ){}

  async getHome(){
    try {
      let data = await this.homeRepository.find()
      return { msg:'Success', data }
    }
    catch(err){
      return { msg: 'Error', data: err}
    }
  }
}
