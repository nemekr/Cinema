package cinema.cinema.repository;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cinema.cinema.entity.Order;
import cinema.cinema.entity.Status;
import cinema.cinema.entity.User;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
	List<Order> findByUser(User user);
	List<Order> findByDate(Timestamp date);
	List<Order> findByStatus(Status status);
}
