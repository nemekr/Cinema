package cinema.cinema.entity;

import javax.persistence.Entity;
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
public class OrderDetail {
	private Order order;
	private Movie movie;
	private CinemaRoom room;
	private Integer quantity;
}
