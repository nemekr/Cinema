package cinema.cinema.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.cinema.entity.CinemaRoom;
import cinema.cinema.service.CinemaRoomService;

@RestController 
@RequestMapping("/api/room") 
public class CinemaRoomApiController {
	
	@Autowired
	private CinemaRoomService roomService;
	
	@GetMapping("/list")
    private ResponseEntity<Iterable<CinemaRoom>> list() {
        Iterable<CinemaRoom> rooms = roomService.listRooms();
        return ResponseEntity.ok(rooms);
    } 
	
	@PostMapping("/create")
    private ResponseEntity<CinemaRoom> create(@RequestBody CinemaRoom room) {
        CinemaRoom saved = roomService.createRoom(room);
        return ResponseEntity.ok(saved);
    }
	
	@PostMapping("/update")
    private ResponseEntity<CinemaRoom> update(@RequestBody CinemaRoom room) {
        CinemaRoom updated = roomService.updateRoom(room);
        return ResponseEntity.ok(updated);
    }
	
	@PostMapping("/delete")
    private ResponseEntity<CinemaRoom> delete(@RequestBody CinemaRoom room) {
        roomService.deleteRoom(room);
        return ResponseEntity.ok(room);
    }
}
