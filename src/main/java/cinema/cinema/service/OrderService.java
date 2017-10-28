package cinema.cinema.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.annotation.SessionScope;

@Transactional(readOnly = true)
@Service
@SessionScope
public class OrderService {

}
