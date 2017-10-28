package cinema.cinema.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cinema.cinema.entity.CinemaRoom;
import cinema.cinema.entity.Movie;
import cinema.cinema.entity.Presentation;

@Repository
public interface PresentationRepository extends CrudRepository<Presentation, Long> {
	List<Presentation> findByMovie(Movie movie);
	List<Presentation> findByRoom(CinemaRoom room);
}
