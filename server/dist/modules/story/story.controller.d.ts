import { StoryService } from "./story.service";
export declare class StoryController {
    private readonly storyService;
    constructor(storyService: StoryService);
    getStory(): Promise<{
        msg: string;
        data: any;
    }>;
}
