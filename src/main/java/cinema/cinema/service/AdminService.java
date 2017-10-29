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
import cinema.cinema.entity.SearchableEntity;
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
	public SearchableEntity updateSearchableEntity(SearchableEntity updatedEntity) {
		checkExistence(updatedEntity);
		
		if(updatedEntity instanceof CinemaRoom)
			return roomRepo.save((CinemaRoom)updatedEntity);
		
		else if(updatedEntity instanceof Movie)
			return movieRepo.save((Movie)updatedEntity);
		
		else if(updatedEntity instanceof Presentation)
			return presentationRepo.save((Presentation)updatedEntity);
		
		return updatedEntity;
	}
	
	@Transactional
	public SearchableEntity deleteSearchableEntity(SearchableEntity entity) {
		checkExistence(entity);
		removeAssociatedOrders(entity);
		if(entity instanceof CinemaRoom)
			roomRepo.delete((CinemaRoom)entity);
		
		else if(entity instanceof Movie)
			movieRepo.delete((Movie)entity);
		
		else if(entity instanceof Presentation)
			presentationRepo.delete((Presentation)entity);
		
		return entity;
	}
	
	private void checkExistence(SearchableEntity entity) {
		Optional<SearchableEntity> foundEntity = Optional.empty();
		
		if(entity instanceof CinemaRoom)
			foundEntity = Optional.of(roomRepo.findOne(entity.getId()));
		
		else if(entity instanceof Movie)
			foundEntity = Optional.of(movieRepo.findOne(entity.getId()));
		
		else if(entity instanceof Presentation)
			foundEntity = Optional.of(presentationRepo.findOne(entity.getId()));
		
		if(!foundEntity.isPresent()) {
			throw new IllegalArgumentException("The entity does not exist!");
		}
	}
	
	private void removeAssociatedOrders(SearchableEntity entity) {
		List<Order> orderList = new ArrayList<>();
		List<Order> ordersToDelete = new ArrayList<Order>();
		
		if(entity instanceof CinemaRoom)
			orderList = orderRepo.findByCinemaRoom((CinemaRoom)entity);
		
		else if(entity instanceof Movie)
			orderList = orderRepo.findByMovie((Movie)entity);
		
		else if(entity instanceof Presentation)
			orderList = orderRepo.findByPresentation((Presentation)entity);
		
		orderList.forEach(order-> {
			if(order.getStatus() != Status.CLOSED) {
				throw new IllegalArgumentException("The entity cannot be deleted because it is in an active order.");
			}
			else {
				ordersToDelete.add(order);
			}
		});
		
		if(!(entity instanceof Presentation)) {
			ordersToDelete.forEach(order-> {
				order.getItems().forEach(item-> {
					presentationRepo.delete(item.getPresentation().getId());
					orderItemRepo.delete(item.getId());
				});
				orderRepo.delete(order.getId());
			});
		}
		
		else {
			ordersToDelete.forEach(order-> {
				order.getItems().forEach(item-> {
					orderItemRepo.delete(item.getId());
				});
				orderRepo.delete(order.getId());
			});
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
