package cinema.cinema.repository;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import cinema.cinema.entity.CinemaRoom;
import cinema.cinema.entity.Movie;
import cinema.cinema.entity.Order;
import cinema.cinema.entity.Presentation;
import cinema.cinema.entity.Status;
import cinema.cinema.entity.User;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
	List<Order> findByUser(User user);
	List<Order> findByDate(Timestamp date);
	List<Order> findByStatus(Status status);
	@Query("select o from Order o JOIN o.items i where i.presentation.room = :room")
	List<Order> findByCinemaRoom(@Param("room")CinemaRoom room);
	@Query("select o from Order o JOIN o.items i where i.presentation.movie = :movie")
	List<Order> findByMovie(@Param("movie")Movie movie);
	@Query("select o from Order o JOIN o.items i where i.presentation = :presentation")
	List<Order> findByPresentation(@Param("presentation")Presentation presentation);
}
