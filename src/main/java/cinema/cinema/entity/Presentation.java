package cinema.cinema.entity;

import java.sql.Timestamp;

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
@Table(name = "Presentation",uniqueConstraints={@UniqueConstraint(columnNames= {"roomId","time"})})
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Presentation extends BaseEntity {
	@ManyToOne
	@JoinColumn(name="movieId")
	private Movie movie;
	@ManyToOne
	@JoinColumn(name="roomId")
	private CinemaRoom room;
	@Column(nullable = false)
	private Timestamp time;
	
	@Column(nullable = false)
	private Integer avaliableTickets;

	public Presentation(Movie movie, CinemaRoom room, Timestamp time) {
		this.movie = movie;
		this.room = room;
		this.time = time;
		this.avaliableTickets = room.getCapacity();
	}
	
	
}
