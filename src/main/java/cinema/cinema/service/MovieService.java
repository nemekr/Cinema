package cinema.cinema.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cinema.cinema.entity.Movie;
import cinema.cinema.entity.Order;
import cinema.cinema.entity.Status;
import cinema.cinema.repository.MovieRepository;
import cinema.cinema.repository.OrderItemRepository;
import cinema.cinema.repository.OrderRepository;
import cinema.cinema.repository.PresentationRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@Data
public class MovieService {
	
	@Autowired
	private MovieRepository movieRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private PresentationRepository presentationRepo;
	
	@Autowired
	private OrderItemRepository orderItemRepo;
	
	
	public Iterable<Movie> listMovies() { 
		return movieRepo.findAll(); 
    } 
	
	@Transactional
	public Movie createMovie(Movie movie) {
		return movieRepo.save(movie);
	}
	
	@Transactional
	public Movie updateMovie(Movie movie) {
		checkExistence(movie);
		return movieRepo.save(movie);
	}
	
	@Transactional
	public Movie deleteMovie(Movie movie) {
		checkExistence(movie);
		removeAssociatedOrders(movie);
		movieRepo.delete(movie.getId());
		return movie;
	}
	
	private void checkExistence(Movie movie) {
		Optional<Movie> foundMovie = Optional.of(movieRepo.findOne(movie.getId()));
		
		if(!foundMovie.isPresent()) {
			throw new IllegalArgumentException("The movie does not exist!");
		}
	}
	
	private void removeAssociatedOrders(Movie movie) {
		List<Order> orderList = new ArrayList<>();
		List<Order> ordersToDelete = new ArrayList<Order>();
		
		orderList = orderRepo.findByMovie(movie);
		
		orderList.forEach(order-> {
			if(order.getStatus() != Status.CLOSED) {
				throw new IllegalArgumentException("The movie cannot be deleted because it is in an active order.");
			}
			else {
				ordersToDelete.add(order);
			}
		});
			
		ordersToDelete.forEach(order-> {
			order.getItems().forEach(item-> {
				presentationRepo.delete(item.getPresentation().getId());
				orderItemRepo.delete(item.getId());
			});
			orderRepo.delete(order.getId());
		});
	}

}
