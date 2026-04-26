import { Queue } from 'bullmq';
export declare class EmailQueue {
    queue: Queue<any, any, string, any, any, string>;
}
