package cinema.cinema.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.cinema.entity.Presentation;
import cinema.cinema.service.PresentationService;

@RestController 
@RequestMapping("/api/presentation") 
public class PresentationApiController {
	
	@Autowired
	private PresentationService presentationService;
	
	@GetMapping("/list")
    private ResponseEntity<Iterable<Presentation>> list() {
        Iterable<Presentation> presentations = presentationService.listPresentations();
        return ResponseEntity.ok(presentations);
    } 
	
	@PostMapping("/create")
    private ResponseEntity<Presentation> create(@RequestBody Presentation presentation) {
        Presentation saved = presentationService.createPresentation(presentation);
        return ResponseEntity.ok(saved);
    }
	
	@PostMapping("/update")
    private ResponseEntity<Presentation> update(@RequestBody Presentation presentation) {
        Presentation updated = presentationService.updatePresentation(presentation);
        return ResponseEntity.ok(updated);
    }
	
	@PostMapping("/delete")
    private ResponseEntity<Presentation> delete(@RequestBody Presentation presentation) {
        presentationService.deletePresentation(presentation);
        return ResponseEntity.ok(presentation);
    }

}
