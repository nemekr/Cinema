package cinema.cinema.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import cinema.cinema.entity.Role;
import cinema.cinema.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	Optional<User> findByEmail(String email);
	Optional<User> findByEmailAndPassword(String email, String password);
	List<User> findByNameIgnoreCaseContaining(String name);
	List<User> findByAddressIgnoreCaseContaining(String address);
	List<User> findByRole(Role role);
}
