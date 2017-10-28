package cinema.cinema.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class CinemaRoom extends BaseEntity {
	@Column( nullable = false)
	private Integer capacity;
	@Column( nullable = false)
	private Integer number;
	@Column( nullable = false)
	private RoomType type;
}
