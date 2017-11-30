package cinema.cinema.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cinema.cinema.entity.Order;
import cinema.cinema.entity.Presentation;
import cinema.cinema.entity.Status;
import cinema.cinema.repository.OrderItemRepository;
import cinema.cinema.repository.OrderRepository;
import cinema.cinema.repository.PresentationRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@Data
public class PresentationService {
	
	@Autowired
	private PresentationRepository presentationRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private OrderItemRepository orderItemRepo;
	
	
	
	public Iterable<Presentation> listPresentations() { 
		return presentationRepo.findAll(); 
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
		if(foundPresentation.isPresent()) {
			throw new IllegalArgumentException("Cannot create presentation: the room is already reserved at that time.");
		}
	}
	
	@Transactional
	public Presentation updatePresentation(Presentation presentation) {
		checkExistence(presentation);
		return presentationRepo.save(presentation);
	}
	
	@Transactional
	public Presentation deletePresentation(Presentation presentation) {
		checkExistence(presentation);
		removeAssociatedOrders(presentation);
		presentationRepo.delete(presentation);
		return presentation;
	}
	
	private void checkExistence(Presentation presentation) {
		Optional<Presentation> foundPresentation = Optional.of(presentationRepo.findOne(presentation.getId()));
		
		if(!foundPresentation.isPresent()) {
			throw new IllegalArgumentException("The presentation does not exist!");
		}
	}
	
	private void removeAssociatedOrders(Presentation presentation) {
		List<Order> orderList = new ArrayList<>();
		List<Order> ordersToDelete = new ArrayList<Order>();
		
		orderList = orderRepo.findByPresentation(presentation);
		
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

}
