package cinema.cinema.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import groovy.transform.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "OrderItem",uniqueConstraints={@UniqueConstraint(columnNames= {"orderId","presentationId"})})
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class OrderItem extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name="presentationId")
	private Presentation presentation;
	@Column( nullable = false)
	private Integer quantity;
}
