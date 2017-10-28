package cinema.cinema.entity;

import java.util.List;

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
public class Movie extends BaseEntity{
	private String title;
	private Integer year;
	private Integer length;
	private String description;
	private List<String> actors;
	private Integer prize;
}
