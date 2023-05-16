import { Repository } from "typeorm";
import { Story } from "./entity/story.entity";
export declare class StoryService {
    private readonly storyRepository;
    constructor(storyRepository: Repository<Story>);
    getStory(): Promise<{
        msg: string;
        data: any;
    }>;
}
