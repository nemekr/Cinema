package cinema.cinema.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.cinema.entity.User;
import cinema.cinema.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserApiController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/list")
    private ResponseEntity<Iterable<User>> list() {
        Iterable<User> users = userService.listUsers();
        return ResponseEntity.ok(users);
    } 
	
	@PostMapping("/create")
    private ResponseEntity<User> create(@RequestBody User user) {
        User saved = userService.register(user);
        return ResponseEntity.ok(saved);
    }
	
	@PostMapping("/modify")
    private ResponseEntity<User> update(@RequestBody User user) {
        User updated = userService.updateUser(user);
        return ResponseEntity.ok(updated);
    }
	
	@PostMapping("/login") 
    public ResponseEntity<User> login(@RequestBody User user) { 
        try { 
            return ResponseEntity.ok(userService.login(user)); 
        } 
        catch (IllegalArgumentException e) { 
            return ResponseEntity.badRequest().build(); 
        } 
    } 
     
	@PostMapping("/logout") 
    public ResponseEntity<User> logout(@RequestBody User user) { 
        this.userService.setUser(null);
        return ResponseEntity.ok().build(); 
    } 

}
