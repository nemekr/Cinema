package cinema.cinema;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import cinema.cinema.entity.CinemaRoom;
import cinema.cinema.entity.Movie;
import cinema.cinema.entity.Order;
import cinema.cinema.entity.OrderItem;
import cinema.cinema.entity.Presentation;
import cinema.cinema.entity.Role;
import cinema.cinema.entity.RoomType;
import cinema.cinema.entity.Status;
import cinema.cinema.entity.User;
import cinema.cinema.repository.CinemaRoomRepository;
import cinema.cinema.repository.MovieRepository;
import cinema.cinema.repository.PresentationRepository;
import cinema.cinema.service.OrderService;
import cinema.cinema.service.UserService;

@SpringBootApplication
public class CinemaApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private PresentationRepository presRepo;
	
	@Autowired
	private MovieRepository movieRepo;
	
	@Autowired
	private CinemaRoomRepository roomRepo;
	
	
	@Override
	public void run(String... arg0) throws Exception {

		System.out.println("Hello World!");
		
		try {
			User testUser = new User("test@test.hu", "pass", "Jani", "Hid alatt", Role.USER);
			User registeredUser = userService.register(testUser);
			System.out.println(registeredUser);
			
			Movie testMovie = new Movie("Asd", new Integer(1928), new Integer(120), "desc", new Integer(1200));
			movieRepo.save(testMovie);
			CinemaRoom testRoom = new CinemaRoom(new Integer(120), new Integer(1), RoomType.NORMAL);
			roomRepo.save(testRoom);
			Presentation testPres = new Presentation(testMovie, testRoom, new Timestamp(System.currentTimeMillis()), new Integer(200));
			presRepo.save(testPres);
			OrderItem testOrderItem = new OrderItem(testPres, new Integer(1));
			
			List<OrderItem> list = new ArrayList<>();
			list.add(testOrderItem);
			
			Order testOrder = new Order(testUser, new Timestamp(System.currentTimeMillis()) , Status.PENDING, list);
			
			orderService.placeOrder(testOrder);
			orderService.modifyOrderState(testOrder, Status.APPROVED);
			
		} catch (IllegalArgumentException ex) {
			System.out.println(ex.getMessage());
		}
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(CinemaApplication.class, args);
	}
}
