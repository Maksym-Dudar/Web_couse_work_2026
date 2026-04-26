import { TCurrency } from '../../common/types/patment.type';
import Stripe from 'stripe';
export declare class StripeService {
    private stripe;
    constructor();
    createPaymentIntent(data: {
        amount: number;
        currency: TCurrency;
        metadata?: Record<string, number>;
    }): Promise<Stripe.Response<Stripe.PaymentIntent>>;
    constructWebhookEvent(body: Buffer, signature: string): Stripe.Event;
}
