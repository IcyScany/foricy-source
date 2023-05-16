import { AlbumService } from "./album.service";
import { Album } from "./entity/album.entity";
export declare class AlbumController {
    private readonly albumService;
    constructor(albumService: AlbumService);
    getAlbum(): Promise<{
        msg: string;
        data: any;
    }>;
    addAlbum(album: Album, file: any): Promise<{
        msg: string;
        data: any;
    }>;
}
