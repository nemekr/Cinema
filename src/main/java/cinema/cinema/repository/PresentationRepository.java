package cinema.cinema.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cinema.cinema.entity.Presentation;

@Repository
public interface PresentationRepository extends CrudRepository<Presentation, Long> {
	
}
