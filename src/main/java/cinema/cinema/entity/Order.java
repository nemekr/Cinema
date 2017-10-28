package cinema.cinema.entity;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import groovy.transform.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "CinemaOrder")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Order extends BaseEntity {
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="userId", referencedColumnName="id")
	private User user;
	@Column( nullable = false)
	private Timestamp date;
	@Column( nullable = false)
	@Enumerated(EnumType.STRING)
	private Status status;
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="orderId")
	private List<OrderItem> items;
}
