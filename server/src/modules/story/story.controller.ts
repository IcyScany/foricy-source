import { Controller, Get } from "@nestjs/common";
import { Story } from "./entity/story.entity";
import { StoryService } from "./story.service";

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get()
  getStory(){
    return this.storyService.getStory()
  }
}
