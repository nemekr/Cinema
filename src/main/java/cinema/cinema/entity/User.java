package cinema.cinema.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import groovy.transform.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "User")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity{
	@Column( nullable = false, unique = true)
	private String email;
	@Column( nullable = false)
	private String password;
	@Column( nullable = false)
	private String name;
	@Column( nullable = false)
	private String address;
	@Enumerated(EnumType.STRING)
	@Column( nullable = false)
	private Role role;
}
