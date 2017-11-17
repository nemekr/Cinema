import { User } from "./User";
import { OrderItem } from "./OrderItem";

export class Order {  
    id: number = 0;  
    user: User;
    date: Date;
    status: string;  
    items: OrderItem[];
}  
