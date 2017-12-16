package cinema.cinema.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.annotation.SessionScope;

import cinema.cinema.entity.Order;
import cinema.cinema.entity.OrderItem;
import cinema.cinema.entity.Presentation;
import cinema.cinema.entity.Status;
import cinema.cinema.entity.User;
import cinema.cinema.repository.OrderRepository;
import cinema.cinema.repository.PresentationRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@Data
public class OrderService {
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private PresentationRepository presentationRepo;
	
	@Transactional
	public Order placeOrder(Order newOrder) {
		validateOrder(newOrder);
		for(OrderItem item : newOrder.getItems()) {
			 Presentation presentation = item.getPresentation();
			 Integer orderedQty = item.getQuantity();
			 presentation.setAvailableTickets(presentation.getAvailableTickets() - orderedQty);
			 presentationRepo.save(presentation);
		}
		
		return orderRepo.save(newOrder);
	}
	
	private void validateOrder(Order newOrder) {
		for(OrderItem item : newOrder.getItems()) {
			 Presentation presentation = item.getPresentation();
			 Integer orderedQty = item.getQuantity();

			 if ( presentation.getAvailableTickets() < orderedQty) {
				 throw new IllegalArgumentException("You cannot buy that many tickets!");
			 }
		}
	}
	
	@Transactional
	public Order modifyOrderState(Order order, Status newStatus) {
		checkOrderExistence(order);
		order.setStatus(newStatus);
		return orderRepo.save(order);
	}
	
	@Transactional
	public Order deleteOrder(Order order) {
		validateOrderDeletion(order);
		orderRepo.delete(order);
		return order;
	}
	
	private void validateOrderDeletion(Order order) {
		checkOrderExistence(order);
		orderClosed(order);
	}
	
	private void checkOrderExistence(Order order) {
		Optional<Order> foundOrder = Optional.of(orderRepo.findOne(order.getId()));
		if(!foundOrder.isPresent()) {
			throw new IllegalArgumentException("The order does not exist!");
		}
	}
	
	private void orderClosed(Order order) {
		if(order.getStatus() != Status.CLOSED) {
			throw new IllegalArgumentException("The order cannot be deleted because it is in an active state.");
		}
	}
	
	public List<Order> listOrders() {
		Iterable<Order> iterator =  orderRepo.findAll();
		List<Order> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		target.forEach(order-> {
			Hibernate.initialize(order.getUser());
			Hibernate.initialize(order.getItems());
		});
		return target;
	}
	
	public List<Order> findOrderByUser(User user) {
		return orderRepo.findByUser(user);
	}
	
	public List<Order> findOrderByDate(Timestamp date) {
		return orderRepo.findByDate(date);
	}
	
	public List<Order> findOrderByStatus(Status status) {
		return orderRepo.findByStatus(status);
	}
}
