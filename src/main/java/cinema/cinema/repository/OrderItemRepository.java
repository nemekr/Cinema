package cinema.cinema.repository;

import org.springframework.data.repository.CrudRepository;

import cinema.cinema.entity.OrderItem;

public interface OrderItemRepository extends CrudRepository<OrderItem, Long>{

}
