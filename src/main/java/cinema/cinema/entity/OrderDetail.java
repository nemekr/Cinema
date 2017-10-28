package cinema.cinema.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import groovy.transform.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "OrderDetail")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class OrderDetail {
	
	@Column( nullable = false)
	private Order order;
	@ManyToMany
	@Column( nullable = false)
	private Movie movie;
	@Column( nullable = false)
	private CinemaRoom room;
	@Column( nullable = false)
	private Integer quantity;
}
