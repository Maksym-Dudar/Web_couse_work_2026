import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import express from 'express';
import { SignInDto } from './dto/sign-in.dto';
import { GenerateOtpDto } from './dto/otp.dto';
import { ResetPasswordOtpDto } from './dto/reset-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(dto: SignInDto, res: express.Response): Promise<{
        success: boolean;
    }>;
    signIn(dto: SignUpDto, res: express.Response): Promise<{
        success: boolean;
    }>;
    generateOtp(dto: GenerateOtpDto): Promise<void>;
    resetPasswordOtp(dto: ResetPasswordOtpDto): Promise<{
        email: string;
        firstName: string;
        lastName: string | null;
        avatar: string | null;
    }>;
    logOut(res: express.Response): Promise<{
        success: boolean;
    }>;
}
