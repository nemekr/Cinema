package cinema.cinema.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cinema.cinema.entity.Role;
import cinema.cinema.entity.User;
import cinema.cinema.repository.UserRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@Data
public class UserService {
	@Autowired
	private UserRepository userRepo;
	
	//private ArrayList<User> loggedInUsers;
	
	private User user;
	
	/*public User login(String email, String password) {
		Optional<User> daoUser = userRepo.findByEmail(email);
		if (daoUser.isPresent()) {
			user = daoUser.get();

			if (user != null && (user.getPassword().equals(password))
					&& (user.getEmail().equals(email))) {
				if (loggedInUsers.contains(user)) {
					throw new IllegalArgumentException("User already logged in!");
				}
				loggedInUsers.add(user);
				return user;
			}
		}
		throw new IllegalArgumentException("Wrong username or password!");

	}


	public void logout(User logOutUser) {
		if (logOutUser != null && userRepo.findByEmail(logOutUser.getEmail()).isPresent()) {
			if (loggedInUsers.contains(logOutUser)) {
				loggedInUsers.remove(logOutUser);
				user = null;
			} else {
				throw new IllegalArgumentException("User already logged out!");
			}
		}
		throw new IllegalArgumentException("Invalid user!");
	}*/
	
	public User login(User user) {
        if (isValid(user)) {
            return this.user = userRepo.findByEmail(user.getEmail()).get();
        }
        throw new IllegalArgumentException();
    }

    public void logout() { 
        user = null; 
    } 
    
    public boolean isValid(User user) {
        return userRepo.findByEmailAndPassword(user.getEmail(), user.getPassword()).isPresent();
    }
    
    public boolean isLoggedIn() {
        return user != null;
    }
    
    public User getLoggedInUser() { 
        return user; 
    } 

	@Transactional
	public User register(User registerUser) {
		Optional<User> repoUser = userRepo.findByEmail(registerUser.getEmail());
		if (repoUser.isPresent()) {
			throw new IllegalArgumentException("User already exists!");
		}

		return userRepo.save(registerUser);
	}
	
	@Transactional
	public User registerAdmin(User promoteUser) {
		if (promoteUser == null || promoteUser.getEmail() == null) {
			throw new IllegalArgumentException("User cannot be null!");
		}

		if (!(userRepo.findByEmail(promoteUser.getEmail()).isPresent())) {
			throw new IllegalArgumentException("User does not exists!");
		}

		promoteUser.setRole(Role.ADMIN);
		return userRepo.save(promoteUser);
	}

	@Transactional
	public User updateUser(User updatedUser) {
		if (updatedUser == null || "".equals(updatedUser.getPassword()) || "".equals(updatedUser.getAddress())
				|| "".equals(updatedUser.getName())) {
			throw new IllegalArgumentException("One of the arguments are null!");
		}

		if (!(userRepo.findByEmail(updatedUser.getEmail()).isPresent())) {
			throw new IllegalArgumentException("User does not exists!");
		}

		return userRepo.save(updatedUser);
	}

	@Transactional
	public User deleteUser(User deleteUser) {
		if (deleteUser == null) {
			throw new NullPointerException("User cannot be null!");
		} else if (!(userRepo.findByEmail(deleteUser.getEmail()).isPresent())) {
			throw new IllegalArgumentException("User does not exists!");
		}

		userRepo.delete(deleteUser);
		return deleteUser;
	}
	
	public List<User> listUsers() {
		Iterable<User> iterator =  userRepo.findAll();
		List<User> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		return target;
	}
	
	public List<User> findUserByNameIgnoreCaseContaining(String name) {
		return userRepo.findByNameIgnoreCaseContaining(name);
	}
	
	public List<User> findByAddressIgnoreCaseContaining(String address) {
		return userRepo.findByAddressIgnoreCaseContaining(address);
	}
	
	public List<User> findByRole(Role role) {
		return userRepo.findByRole(role);
	}
}
