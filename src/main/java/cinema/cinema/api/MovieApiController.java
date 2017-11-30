package cinema.cinema.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.cinema.entity.Movie;
import cinema.cinema.service.MovieService;

@RestController 
@RequestMapping("/api/movie") 
public class MovieApiController {
	
	@Autowired
	private MovieService movieService;
	
	@GetMapping("/list")
    private ResponseEntity<Iterable<Movie>> list() {
        Iterable<Movie> movies = movieService.listMovies();
        return ResponseEntity.ok(movies);
    } 
	
	@PostMapping("/create")
    private ResponseEntity<Movie> create(@RequestBody Movie movie) {
        Movie saved = movieService.createMovie(movie);
        return ResponseEntity.ok(saved);
    }
	
	@PostMapping("/update")
    private ResponseEntity<Movie> update(@RequestBody Movie movie) {
        Movie updated = movieService.updateMovie(movie);
        return ResponseEntity.ok(updated);
    }
	
	@PostMapping("/delete")
    private ResponseEntity<Movie> delete(@RequestBody Movie movie) {
        movieService.deleteMovie(movie);
        return ResponseEntity.ok(movie);
    }
}
