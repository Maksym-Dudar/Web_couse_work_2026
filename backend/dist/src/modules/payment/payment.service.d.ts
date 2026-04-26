import { StripeService } from '../../integrations/stripe/stripe.service';
import { OrderService } from '../order/order.service';
export declare class PaymentService {
    private stripeService;
    private orderService;
    constructor(stripeService: StripeService, orderService: OrderService);
    createIntent(orderId: number): Promise<import("stripe").Stripe.Response<import("stripe").Stripe.PaymentIntent>>;
}
