import { Movie } from './Movie';
import { CinemaRoom } from './CinemaRoom';

export class Presentation {  
    id: number = 0;  
    availableTickets: number = 0;  
    time: Date;
    movie: Movie;
    room: CinemaRoom;
}  
