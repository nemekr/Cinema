import { User } from "./User";
import { OrderItem } from "./OrderItem";
import { Status } from './Status';

export class Order {  
    id: number = 0;  
    user: User;
    date: Date;
    status: Status;  
    items: OrderItem[];
}  
