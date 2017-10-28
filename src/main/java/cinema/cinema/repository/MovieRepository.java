package cinema.cinema.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cinema.cinema.entity.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
	List<Movie> findByTitleIgnoreCaseContaining(String title);
	List<Movie> findByYear(Integer year);
}
