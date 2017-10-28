package cinema.cinema.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cinema.cinema.entity.CinemaRoom;
import cinema.cinema.entity.Movie;
import cinema.cinema.entity.Order;
import cinema.cinema.entity.Presentation;
import cinema.cinema.entity.Status;
import cinema.cinema.repository.CinemaRoomRepository;
import cinema.cinema.repository.MovieRepository;
import cinema.cinema.repository.OrderItemRepository;
import cinema.cinema.repository.OrderRepository;
import cinema.cinema.repository.PresentationRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@Data
public class AdminService {
	@Autowired
	private CinemaRoomRepository roomRepo;
	
	@Autowired
	private MovieRepository movieRepo;
	
	@Autowired
	private PresentationRepository presentationRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private OrderItemRepository orderItemRepo;
	
	public CinemaRoom createRoom(CinemaRoom room) {
		return roomRepo.save(room);
	}
	
	public Movie createMovie(Movie movie) {
		return movieRepo.save(movie);
	}
	
	public Presentation createPresentation(Presentation presentation) {
		return presentationRepo.save(presentation);
	}
	
	
	public CinemaRoom updateRoom(CinemaRoom updatedRoom) {
		return roomRepo.save(updatedRoom);
	}
	
	public Movie updateMovie(Movie updatedMovie) {
		return movieRepo.save(updatedMovie);
	}
	
	public Presentation updatePresentation(Presentation updatedPresentation) {
		return presentationRepo.save(updatedPresentation);
	}
	
	@Transactional
	public CinemaRoom deleteRoom(CinemaRoom room) {
		checkRoomExistence(room);
		removeAssociatedOrders(room);
		roomRepo.delete(room);
		return room;
	}
	
	private void checkRoomExistence(CinemaRoom room) {
		Optional<CinemaRoom> foundRoom = Optional.of(roomRepo.findOne(room.getId()));
		if(!foundRoom.isPresent()) {
			throw new IllegalArgumentException("The room does not exist!");
		}
	}
	
	private void removeAssociatedOrders(CinemaRoom room) {
		List<Order> orderList = orderRepo.findByCinemaRoom(room);
		List<Order> ordersToDelete = new ArrayList<Order>();
		orderList.forEach(order-> {
			if(order.getStatus() != Status.CLOSED) {
				throw new IllegalArgumentException("The room cannot be deleted because it is in an active order.");
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
	
	public Movie deleteMovie(Movie movie) {
		movieRepo.delete(movie);
		return movie;
	}
	
	private void checkMovieExistence(Movie movie) {
		Optional<Movie> foundMovie = Optional.of(movieRepo.findOne(movie.getId()));
		if(!foundMovie.isPresent()) {
			throw new IllegalArgumentException("The movie does not exist!");
		}
	}
	
	public Presentation deletePresentation(Presentation presentation) {
		presentationRepo.delete(presentation);
		return presentation;
	}
	
	private void checkPresentationExistence(Presentation presentation) {
		Optional<Presentation> foundPresentation = Optional.of(presentationRepo.findOne(presentation.getId()));
		if(!foundPresentation.isPresent()) {
			throw new IllegalArgumentException("The presentation does not exist!");
		}
	}
	
	public List<CinemaRoom> listRooms() {
		Iterable<CinemaRoom> iterator =  roomRepo.findAll();
		List<CinemaRoom> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		return target;
	}
	
	public List<Movie> listMovies() {
		Iterable<Movie> iterator =  movieRepo.findAll();
		List<Movie> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		return target;
	}
	
	
	public List<Presentation> listPresentations() {
		Iterable<Presentation> iterator =  presentationRepo.findAll();
		List<Presentation> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		return target;
	}
}
