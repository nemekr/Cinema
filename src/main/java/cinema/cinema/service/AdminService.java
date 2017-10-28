package cinema.cinema.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cinema.cinema.entity.CinemaRoom;
import cinema.cinema.entity.Movie;
import cinema.cinema.entity.Presentation;
import cinema.cinema.repository.CinemaRoomRepository;
import cinema.cinema.repository.MovieRepository;
import cinema.cinema.repository.PresentationRepository;
import lombok.Data;

@Transactional(readOnly = true)
@Service
@Data
public class AdminService {
	@Autowired
	CinemaRoomRepository roomRepo;
	
	@Autowired
	MovieRepository movieRepo;
	
	@Autowired
	PresentationRepository presentationRepo;
	
	public CinemaRoom createRoom(CinemaRoom room) {
		return roomRepo.save(room);
	}
	
	public Movie createMovie(Movie movie) {
		return movieRepo.save(movie);
	}
	
	public Presentation createPresentation(Presentation presentation) {
		return presentationRepo.save(presentation);
	}
	
	
	public CinemaRoom updateRoom(CinemaRoom updatedRoom) {
		return roomRepo.save(updatedRoom);
	}
	
	public Movie updateMovie(Movie updatedMovie) {
		return movieRepo.save(updatedMovie);
	}
	
	public Presentation updatePresentation(Presentation updatedPresentation) {
		return presentationRepo.save(updatedPresentation);
	}
	
	public CinemaRoom deleteRoom(CinemaRoom room) {
		roomRepo.delete(room);
		return room;
	}
	
	public Movie deleteMovie(Movie movie) {
		movieRepo.delete(movie);
		return movie;
	}
	
	public Presentation deletePresentation(Presentation presentation) {
		presentationRepo.delete(presentation);
		return presentation;
	}
	
	public List<CinemaRoom> listRooms() {
		Iterable<CinemaRoom> iterator =  roomRepo.findAll();
		List<CinemaRoom> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		return target;
	}
	
	public List<Movie> listMovies() {
		Iterable<Movie> iterator =  movieRepo.findAll();
		List<Movie> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		return target;
	}
	
	
	public List<Presentation> listPresentations() {
		Iterable<Presentation> iterator =  presentationRepo.findAll();
		List<Presentation> target = new ArrayList<>();
		
		iterator.forEach(target::add);
		return target;
	}
}
