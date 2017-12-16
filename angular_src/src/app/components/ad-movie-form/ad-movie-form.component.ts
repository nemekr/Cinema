import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'movie-form',
  templateUrl: './ad-movie-form.component.html',
  styleUrls: ['./ad-movie-form.component.css']
})
export class AdMovieFormComponent implements OnInit {
  @Input() movie: Movie;
  model: Movie;
  @Output() onSubmit = new EventEmitter<Movie>();
  @Output() onCancel = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.movie);
  }

  submit(form) {
    if(!form.valid) return;
    this.onSubmit.emit(this.model);
  }

  cancel() {
    this.onCancel.emit("cancelled");
  }

}
