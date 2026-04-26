import { UserService } from './user.service';
import { Request } from 'express';
import { PatchUserDto } from './dto/update-user.dto';
import { AccessTokenPayload } from '../auth/types.js';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findUser(req: Request & {
        user: AccessTokenPayload;
    }): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
    patchUser(patchUserDto: PatchUserDto, req: Request & {
        user: AccessTokenPayload;
    }): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
    updateAvatar(file: Express.Multer.File, req: Request & {
        user: AccessTokenPayload;
    }): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
}
