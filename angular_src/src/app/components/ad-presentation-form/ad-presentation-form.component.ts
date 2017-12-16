import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Presentation } from '../../models/Presentation';
import { CinemaRoom } from '../../models/CinemaRoom';
import { Movie } from '../../models/Movie';
import { CinemaRoomService } from '../../services/cinema-room.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'ad-presentation-form',
  templateUrl: './ad-presentation-form.component.html',
  styleUrls: ['./ad-presentation-form.component.css']
})
export class AdPresentationFormComponent implements OnInit {

  @Input() presentation: Presentation;
  model: Presentation;
  @Output() onSubmit = new EventEmitter<Presentation>();
  @Output() onCancel = new EventEmitter<string>();
  rooms: CinemaRoom[] = [];
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private roomService: CinemaRoomService
  ) { }

  async ngOnInit() {
    this.rooms = await this.roomService.getRooms();
    this.movies = await this.movieService.getMovies();
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.presentation);
  }

  submit(form) {
    if(!form.valid) return;
    this.onSubmit.emit(this.model);
  }

  cancel() {
    this.onCancel.emit("cancelled");
  }

}
