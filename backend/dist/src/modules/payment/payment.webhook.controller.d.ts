import type { Request } from 'express';
import { StripeService } from '../../integrations/stripe/stripe.service';
import { OrderService } from '../../modules/order/order.service';
export declare class PaymentWebhookController {
    private stripeService;
    private orderService;
    constructor(stripeService: StripeService, orderService: OrderService);
    handleStripeWebhook(req: Request, signature: string): Promise<void>;
}
