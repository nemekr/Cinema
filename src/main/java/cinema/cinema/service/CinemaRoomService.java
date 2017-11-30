package cinema.cinema.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cinema.cinema.entity.CinemaRoom;
import cinema.cinema.entity.Order;
import cinema.cinema.entity.Status;
import cinema.cinema.repository.CinemaRoomRepository;
import cinema.cinema.repository.OrderItemRepository;
import cinema.cinema.repository.OrderRepository;
import cinema.cinema.repository.PresentationRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@Data
public class CinemaRoomService {
	
	@Autowired
	CinemaRoomRepository roomRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private PresentationRepository presentationRepo;
	
	@Autowired
	private OrderItemRepository orderItemRepo;
	
	
	
	public Iterable<CinemaRoom> listRooms() { 
		return roomRepo.findAll(); 
    } 
	
	@Transactional
	public CinemaRoom createRoom(CinemaRoom room) {
		checkRoomNumber(room);
		return roomRepo.save(room);
	}
	
	private void checkRoomNumber(CinemaRoom room) {
		Optional<CinemaRoom> foundRoom = roomRepo.findByNumber(room.getNumber());
		if(foundRoom.isPresent()) {
			throw new IllegalArgumentException("A room with this number already exists!");
		}
	}
	
	@Transactional
	public CinemaRoom updateRoom(CinemaRoom room) {
		checkExistence(room);
		return roomRepo.save(room);
	}
	
	@Transactional
	public CinemaRoom deleteRoom(CinemaRoom room) {
		checkExistence(room);
		removeAssociatedOrders(room);
		roomRepo.delete(room.getId());
		return room;
	}
	
	private void checkExistence(CinemaRoom room) {
		Optional<CinemaRoom> foundRoom = Optional.of(roomRepo.findOne(room.getId()));
		
		if(!foundRoom.isPresent()) {
			throw new IllegalArgumentException("The room does not exist!");
		}
	}
	
	private void removeAssociatedOrders(CinemaRoom room) {
		List<Order> orderList = new ArrayList<>();
		List<Order> ordersToDelete = new ArrayList<Order>();
		
		orderList = orderRepo.findByCinemaRoom(room);
		
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

}
