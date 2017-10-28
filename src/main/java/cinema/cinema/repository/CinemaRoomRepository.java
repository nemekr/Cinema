package cinema.cinema.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import cinema.cinema.entity.CinemaRoom;

public interface CinemaRoomRepository extends CrudRepository<CinemaRoom, Long>{
	Optional<CinemaRoom> findByNumber(Integer number);
}
