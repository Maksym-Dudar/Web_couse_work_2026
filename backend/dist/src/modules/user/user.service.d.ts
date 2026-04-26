import { UserRepository } from './user.repository';
import { AuthService } from '../auth/auth.service';
import { PatchUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userRepo;
    private readonly authService;
    constructor(userRepo: UserRepository, authService: AuthService);
    findUser(email: string): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
    patchUser(email: string, payload: PatchUserDto): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
    updateAvatar(email: string, file: Express.Multer.File): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
}
