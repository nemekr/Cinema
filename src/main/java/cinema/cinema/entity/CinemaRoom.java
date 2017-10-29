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
@Table(name = "CinemaRoom")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class CinemaRoom extends BaseEntity implements SearchableEntity {
	@Column( nullable = false)
	private Integer capacity;
	@Column( nullable = false, unique=true)
	private Integer number;
	@Column( nullable = false)
	@Enumerated(EnumType.STRING)
	private RoomType type;
}
