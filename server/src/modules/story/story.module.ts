import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoryController } from "./story.controller";
import { StoryService } from "./story.service";
import { Story } from "./entity/story.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Story])
  ],
  providers: [StoryService],
  controllers: [StoryController]
})
export class StoryModule {}
