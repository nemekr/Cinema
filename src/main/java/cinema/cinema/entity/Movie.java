package cinema.cinema.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import groovy.transform.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Movie")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Movie extends BaseEntity implements SearchableEntity {
	@Column( nullable = false)
	private String title;
	@Column( nullable = false)
	private Integer year;
	@Column( nullable = false)
	private Integer length;
	@Column( nullable = false)
	private String description;
	@Column( nullable = false)
	private Integer prize;
}
