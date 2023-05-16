import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Story } from "./entity/story.entity";

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private readonly storyRepository: Repository<Story>
  ){}

  // 获取数据
  async getStory(){
    try {
      let data = await this.storyRepository.find()
      return { msg:'Success', data }
    }
    catch(err){
      return { msg: 'Error', data:err}
    }
  }
}
