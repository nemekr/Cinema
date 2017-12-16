package cinema.cinema;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class CinemaApplication extends WebMvcConfigurerAdapter {
	public static void main(String[] args) {
		SpringApplication.run(CinemaApplication.class, args);
	}
}
