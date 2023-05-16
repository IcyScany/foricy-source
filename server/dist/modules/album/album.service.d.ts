import { Repository } from "typeorm";
import { Album } from "./entity/album.entity";
export declare class AlbumService {
    private readonly albumRepository;
    constructor(albumRepository: Repository<Album>);
    getAlbum(): Promise<{
        msg: string;
        data: any;
    }>;
    addAlbum(album: Album, file: any): Promise<{
        msg: string;
        data: any;
    }>;
}
