package cinema.cinema.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.cinema.entity.Order;
import cinema.cinema.entity.User;
import cinema.cinema.service.OrderService;

@RestController
@RequestMapping("/api/order")
public class OrderApiController {

	@Autowired
	private OrderService orderService;
	
	@GetMapping("/allorder")
    private ResponseEntity<Iterable<Order>> listOrders() {
        Iterable<Order> orders = orderService.listOrders();
        return ResponseEntity.ok(orders);
    } 
	
	@GetMapping("/userorder")
    private ResponseEntity<Iterable<Order>> listUserOrders(User user) {
        Iterable<Order> orders = orderService.findOrderByUser(user);
        return ResponseEntity.ok(orders);
    }
}
