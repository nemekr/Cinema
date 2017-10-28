package cinema.cinema.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.annotation.SessionScope;

import cinema.cinema.entity.Order;
import cinema.cinema.entity.Status;
import cinema.cinema.entity.User;
import cinema.cinema.repository.OrderRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@SessionScope
@Data
public class OrderService {
	@Autowired
	private OrderRepository orderRepo;
	
	public Order placeOrder(Order newOrder) {
		for(OrderItem item : newOrder.getItems()) {
			
		}
		
		return null;
	}
	
	public Order modifyOrderState(Order modifyOrder, Status newStatus) {
		modifyOrder.setStatus(newStatus);
		orderRepo.save(modifyOrder);
		return modifyOrder;
	}
	
	public List<Order> listOrders() {
		Iterable<Order> iterator =  orderRepo.findAll();
		List<Order> target = new ArrayList<>();
		
		iterator.forEach(target::add);
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
