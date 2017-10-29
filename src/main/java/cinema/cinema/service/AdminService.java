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
	
	@Transactional
	public CinemaRoom createRoom(CinemaRoom room) {
		checkRoomNumber(room);
		return roomRepo.save(room);
	}
	
	private void checkRoomNumber(CinemaRoom room) {
		Optional<CinemaRoom> foundRoom = roomRepo.findByNumber(room.getNumber());
		if(!foundRoom.isPresent()) {
			throw new IllegalArgumentException("A room with this number already exists!");
		}
	}
	
	@Transactional
	public Movie createMovie(Movie movie) {
		return movieRepo.save(movie);
	}
	
	@Transactional
	public Presentation createPresentation(Presentation presentation) {
		checkPresentationValidity(presentation);
		return presentationRepo.save(presentation);
	}
	
	// TODO: idointervallum vizsgalata (a room gyakorlatilag [time, time + movie.length] intervallumban foglalt)
	private void checkPresentationValidity(Presentation presentation) {
		Optional<Presentation> foundPresentation = 
				presentationRepo.findByRoomAndTime(presentation.getRoom(),presentation.getTime());
		if(!foundPresentation.isPresent()) {
			throw new IllegalArgumentException("Cannot create presentation: the room is already reserved at that time.");
		}
	}
	
	@Transactional
	public CinemaRoom updateRoom(CinemaRoom updatedRoom) {
		checkRoomExistence(updatedRoom);
		return roomRepo.save(updatedRoom);
	}
	
	@Transactional
	public Movie updateMovie(Movie updatedMovie) {
		checkMovieExistence(updatedMovie);
		return movieRepo.save(updatedMovie);
	}
	
	@Transactional
	public Presentation updatePresentation(Presentation updatedPresentation) {
		checkPresentationExistence(updatedPresentation);
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
	
	@Transactional
	public Movie deleteMovie(Movie movie) {
		checkMovieExistence(movie);
		removeAssociatedOrders(movie);
		movieRepo.delete(movie);
		return movie;
	}
	
	private void checkMovieExistence(Movie movie) {
		Optional<Movie> foundMovie = Optional.of(movieRepo.findOne(movie.getId()));
		if(!foundMovie.isPresent()) {
			throw new IllegalArgumentException("The movie does not exist!");
		}
	}
	
	private void removeAssociatedOrders(Movie movie) {
		List<Order> orderList = orderRepo.findByMovie(movie);
		List<Order> ordersToDelete = new ArrayList<Order>();
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
	
	@Transactional
	public Presentation deletePresentation(Presentation presentation) {
		checkPresentationExistence(presentation);
		removeAssociatedOrders(presentation);
		presentationRepo.delete(presentation);
		return presentation;
	}
	
	private void checkPresentationExistence(Presentation presentation) {
		Optional<Presentation> foundPresentation = Optional.of(presentationRepo.findOne(presentation.getId()));
		if(!foundPresentation.isPresent()) {
			throw new IllegalArgumentException("The presentation does not exist!");
		}
	}
	
	private void removeAssociatedOrders(Presentation presentation) {
		List<Order> orderList = orderRepo.findByPresentation(presentation);
		List<Order> ordersToDelete = new ArrayList<Order>();
		orderList.forEach(order-> {
			if(order.getStatus() != Status.CLOSED) {
				throw new IllegalArgumentException("The presentation cannot be deleted because it is in an active order.");
			}
			else {
				ordersToDelete.add(order);
			}
		});
		ordersToDelete.forEach(order-> {
			order.getItems().forEach(item-> {
				orderItemRepo.delete(item.getId());
			});
			orderRepo.delete(order.getId());
		});
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
