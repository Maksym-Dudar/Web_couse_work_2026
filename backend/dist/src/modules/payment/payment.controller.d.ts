import { PaymentService } from './payment.service';
import { CreateIntent } from './dto/create-intent.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createIntent(body: CreateIntent): Promise<{
        clientSecret: string | null;
    }>;
}
