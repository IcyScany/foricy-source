import { Repository } from "typeorm";
import { Home } from "./entity/home.entity";
export declare class HomeService {
    private readonly homeRepository;
    constructor(homeRepository: Repository<Home>);
    getHome(): Promise<{
        msg: string;
        data: any;
    }>;
}
