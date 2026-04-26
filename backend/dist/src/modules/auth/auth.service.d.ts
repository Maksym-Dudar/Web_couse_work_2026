import { UserRepository } from '../user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
export declare class AuthService {
    private readonly userRepo;
    private readonly jwtService;
    private readonly mailService;
    constructor(userRepo: UserRepository, jwtService: JwtService, mailService: MailService);
    signIn(email: string, password: string): Promise<string>;
    signUp(email: string, password: string, firstName: string): Promise<string>;
    generateOtp(email: string): Promise<void>;
    resetPasswordOtp(email: string, password: string, otp: string): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
    verifyToken(token: string): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
    changePassword(email: any, oldPassword: any, newPassword: any): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
}
