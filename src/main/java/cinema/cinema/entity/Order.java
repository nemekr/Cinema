package cinema.cinema.entity;

import java.sql.Timestamp;

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
public class Order extends BaseEntity{
	private User user;
	private Timestamp date;
	private Status status;
}
